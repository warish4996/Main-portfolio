import React, { useContext, useState, useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { UilPhone, UilEnvelope } from "@iconscout/react-unicons";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setError("");

    if (name === "" || email === "" || message === "") {
      setError("Please fill all fields");
      return;
    }

    setSending(true);

    try {
      const result = await emailjs.sendForm(
        "service_38l9duv", // Your Gmail service ID
        "template_PJM3DA2Z", // Your template ID
        form.current,
        "user_IJpFzxT8nELts7lj7KNnX" // Your public key
      );

      if (result.text === "OK") {
        setDone(true);
        // Clear form
        setName("");
        setEmail("");
        setMessage("");
        // Reset success message after 3 seconds
        setTimeout(() => {
          setDone(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setError(error.text || "Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          <span>Contact me</span>
          <div className="contact-info">
            <div className="contact-item">
              <UilPhone className="contact-icon" />
              <a href="tel:+14375599508">+1 (437) 559-9508</a>
            </div>
            <div className="contact-item">
              <UilEnvelope className="contact-icon" />
              <a href="mailto:warishce@gmail.com">warishce@gmail.com</a>
            </div>
          </div>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={onSubmitHandler}>
          <input
            type="text"
            value={name}
            name="user_name"
            className="user"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
            disabled={sending}
          />
          <input
            type="email"
            value={email}
            name="user_email"
            className="user"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            disabled={sending}
          />
          <textarea
            name="message"
            value={message}
            className="user"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            required
            disabled={sending}
          />
          <button type="submit" className="button" disabled={sending}>
            {sending ? "Sending..." : "Send"}
          </button>
          {error && <span className="error-message">{error}</span>}
          {done && (
            <span className="success-message">Thanks for contacting me!</span>
          )}
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
