
import os
import re
import smtplib
from email.message import EmailMessage

from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# Allow requests from your React development server.
CORS(app, resources={
    r"/api/*": {
        "origins": os.getenv(
            "FRONTEND_URL", "https://ajith-t-portfolio.vercel.app/"
        )
    }
})

app.config["MAX_CONTENT_LENGTH"] = 16 * 1024


@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.get_json(silent=True)

    if not isinstance(data, dict):
        return jsonify({"message": "Invalid request data."}), 400

    name = str(data.get("name", "")).strip()
    sender_email = str(data.get("email", "")).strip()
    message = str(data.get("message", "")).strip()

    if not name or not sender_email or not message:
        return jsonify({
            "message": "Please fill in all fields."
        }), 400

    if len(name) > 100 or len(sender_email) > 254 or len(message) > 5000:
        return jsonify({
            "message": "One or more fields exceed the allowed length."
        }), 400

    if not re.fullmatch(r"[^@\s]+@[^@\s]+\.[^@\s]+", sender_email):
        return jsonify({
            "message": "Please enter a valid email address."
        }), 400

    smtp_email = os.getenv("SMTP_EMAIL")
    smtp_password = os.getenv("SMTP_APP_PASSWORD")
    recipient = os.getenv(
        "CONTACT_RECEIVER", "ajithajju2814@gmail.com"
    )

    if not smtp_email or not smtp_password:
        app.logger.error("SMTP credentials are not configured.")
        return jsonify({
            "message": "Email service is not configured."
        }), 500

    email = EmailMessage()
    email["Subject"] = f"Portfolio contact message from {name}"
    email["From"] = smtp_email
    email["To"] = recipient
    email["Reply-To"] = sender_email

    email.set_content(
        f"New message from your portfolio\n\n"
        f"Name: {name}\n"
        f"Email: {sender_email}\n\n"
        f"Message:\n{message}"
    )

    try:
        with smtplib.SMTP("smtp.gmail.com", 587, timeout=20) as server:
            server.starttls()
            server.login(smtp_email, smtp_password)
            server.send_message(email)

        return jsonify({
            "message": "Your message has been sent successfully!"
        }), 200

    except (smtplib.SMTPException, OSError):
        app.logger.exception("Failed to send portfolio contact email.")
        return jsonify({
            "message": "Unable to send your message. Please try again later."
        }), 502


if __name__ == "__main__":
    app.run(debug=True, port=5000)
