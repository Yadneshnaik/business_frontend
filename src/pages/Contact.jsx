import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://business-backend-ii0j.onrender.com/api/contact", formData);
      setStatus(res.data.message);

      // Clear fields
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus(""), 4000);
    } catch (error) {
      setStatus("Failed to send message.");
    }
  };

  return (
    <div className="page-background">
      <div className="container mt-5">
        <h2>Contact Us</h2>

        {status && <p className="alert alert-info mt-3">{status}</p>}

        <form className="mt-3" onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-3"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            className="form-control mb-3"
            rows="4"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button className="btn btn-primary w-100">Send Message</button>
        </form>
      </div>
    </div>
  );
}
