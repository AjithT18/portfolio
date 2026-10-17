
import os
import re
import smtplib
from email.message import EmailMessage

from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.config["MAX_CONTENT_LENGTH"] = 16 * 1024

frontend_url = os.getenv(
    "FRONTEND_URL",
    "http://localhost:5173"
).rstrip("/")

CORS(
    app,
    resources={
        r"/api/*": {"origins": [frontend_url]}
    },
    methods=["POST", "OPTIONS"],
    allow_headers=["Content-Type"]
)


@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "status": "success",
        "message": "Portfolio contact API is running."
    }), 200


@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.get_json(silent=True)

    if not isinstance(data, dict):
        return jsonify({
            "success": False,
            "message": "Invalid request data."
        }), 400

    name = str(data.get("name", "")).strip()
    sender_email = str(data.get("email", "")).strip()
    message = str(data.get("message", "")).strip()

    if not name or not sender_email or not message:
        return jsonify({
            "success": False,
            "message": "Please fill in all fields."
        }), 400

    if (
        len(name) > 100
        or len(sender_email) > 254
        or len(message) > 5000
    ):
        return jsonify({
            "success": False,
            "message": "One or more fields are too long."
        }), 400

    if not re.fullmatch(
        r"[^@\s]+@[^@\s]+\.[^@\s]+",
        sender_email
    ):
        return jsonify({
            "success": False,
            "message": "Please enter a valid email address."
        }), 400

    smtp_email = os.getenv("SMTP_EMAIL")
    smtp_password = os.getenv("SMTP_APP_PASSWORD")
    recipient = os.getenv(
        "CONTACT_RECEIVER",
        "ajithajju2814@gmail.com"
    )

    if not smtp_email or not smtp_password:
        app.logger.error("SMTP credentials are missing.")
        return jsonify({
            "success": False,
            "message": "Email service is not configured."
        }), 500

    email = EmailMessage()
    email["Subject"] = f"Portfolio message from {name}"
    email["From"] = smtp_email
    email["To"] = recipient
    email["Reply-To"] = sender_email

    email.set_content(
        "New message received from your portfolio.\n\n"
        f"Name: {name}\n"
        f"Email: {sender_email}\n\n"
        f"Message:\n{message}"
    )

    try:
        with smtplib.SMTP(
            "smtp.gmail.com", 587, timeout=20
        ) as server:
            server.ehlo()
            server.starttls()
            server.ehlo()
            server.login(smtp_email, smtp_password)
            server.send_message(email)

        return jsonify({
            "success": True,
            "message": "Your message has been sent successfully!"
        }), 200

    except (smtplib.SMTPException, OSError):
        app.logger.exception("Email delivery failed.")
        return jsonify({
            "success": False,
            "message": "Unable to send your message. Please try again later."
        }), 502


@app.errorhandler(413)
def request_too_large(error):
    return jsonify({
        "success": False,
        "message": "Your request is too large."
    }), 413


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=False)
