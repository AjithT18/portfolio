import "../style/Contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    try {
      const response = await fetch("https://ajitht-portfolio-api.vercel.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message.");
      }

      setStatus(result.message);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus(error.message || "Unable to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };
  return (
    <>
      <div>
        <div className="contact theme" id="contact">
          <h1>
            <div className="dot"></div>Contact
          </h1>
          <p className="sam">Let's build something.</p>
          <div className="content">
            <div className="left">
              <p className="sam1">
                I'm open to full-time software development roles. The quickest
                way to reach me:
              </p>
              <div className="boxes">
                <a href="">
                  <div className="box">
                    <div className="lefcon">
                      <div className="leficon">
                        <i className="fa-regular fa-envelope"></i>
                      </div>
                      <div className="center">
                        <p className="main">EMAIL</p>
                        <p className="content">ajithajju2814@gmail.com</p>
                      </div>
                    </div>
                    <div className="rightarraw">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a href="">
                  <div className="box">
                    <div className="lefcon">
                      <div className="leficon">
                        <i className="fa-solid fa-phone"></i>
                      </div>
                      <div className="center">
                        <p className="main">PHONE</p>
                        <p className="content">+91 7483424493</p>
                      </div>
                    </div>
                    <div className="rightarraw">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/ajith-t-988069320"
                  target="_blank"
                >
                  <div className="box">
                    <div className="lefcon">
                      <div className="leficon">
                        <i className="fa-brands fa-linkedin"></i>
                      </div>
                      <div className="center">
                        <p className="main">LINKEDIN</p>
                        <p className="content">Connect to LinkedIn</p>
                      </div>
                    </div>
                    <div className="rightarraw">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a href="https://github.com/AjithT18" target="_blank">
                  <div className="box">
                    <div className="lefcon">
                      <div className="leficon">
                        <i className="fa-brands fa-github"></i>
                      </div>
                      <div className="center">
                        <p className="main">GITHUB</p>
                        <p className="content">View my Code</p>
                      </div>
                    </div>
                    <div className="rightarraw">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a href="https://leetcode.com/u/Ajith_T18/" target="_blank">
                  <div className="box">
                    <div className="lefcon">
                      <div className="leficon">
                        <i className="fa-brands fa-leetcode"></i>
                      </div>
                      <div className="center">
                        <p className="main">LEETCODE</p>
                        <p className="content">100+ problems solved</p>
                      </div>
                    </div>
                    <div className="rightarraw">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="right">
              <form onSubmit={handleSubmit}>
                <div className="name ">
                  <p>Name</p>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="jane Doe"
                  />
                </div>
                <div className="email">
                  <p>Email</p>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@company.com"
                  />
                </div>
                <div className="message">
                  <p>Message</p>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange} 
                    required
                    id="message1"
                    rows={4}
                    cols={55}
                  ></textarea>
                </div>
                <button type="submit" disabled={sending}>
                  {sending ? "Sending..." : "Send Message"}
                </button>

                {status && (
                  <p role="status" aria-live="polite">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className="copyrights">
          <div className="cpr">© 2026 Ajith T. All rights reserved.</div>
          <div className="icon">
            <a href="https://github.com/AjithT18" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ajith-t-988069320"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://leetcode.com/u/Ajith_T18/" target="_blank">
              <i className="fa-brands fa-leetcode"></i>
            </a>
            <a href="">
              <i className="fa-regular fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
