import React, { useState } from "react";
import { X, Send } from "lucide-react";
import { ACCESSKEY, FORMURL } from "../env";


interface ContactFormProps {
  onClose: () => void;
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [buttonText, setButtonText] = useState("Send message");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData();

    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);
    form.append("access_key", ACCESSKEY);

    try {
      setButtonText("Sending...");

      const response = await fetch(FORMURL, {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        setButtonText("Sent ✓");

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          onClose();
          setButtonText("Send message");
        }, 3000);
      } else {
        console.error("Error:", data.message);
        setButtonText("Failed");

        setTimeout(() => {
          setButtonText("Send message");
        }, 3000);
      }
    } catch (error) {
      console.error("Error:", error);
      setButtonText("Failed");

      setTimeout(() => {
        setButtonText("Send message");
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="contact-form p-8 rounded-lg w-full max-w-md relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-emerald-500 hover:text-emerald-400 transition-colors"
          aria-label="Close contact form"
        >
          <X />
        </button>

        {/* Title */}
        <h2 className="matrix-text text-4xl font-bold text-emerald-500 mb-6">
          Contact Me
        </h2>

        {/* Contact Form */}
        <form onSubmit={onSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black/50 border-2 border-emerald-500 rounded-lg px-4 py-2 text-emerald-400 placeholder-emerald-700 focus:outline-none focus:border-emerald-400 transition-colors"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              required
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-black/50 border-2 border-emerald-500 rounded-lg px-4 py-2 text-emerald-400 placeholder-emerald-700 focus:outline-none focus:border-emerald-400 transition-colors"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              required
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full bg-black/50 border-2 border-emerald-500 rounded-lg px-4 py-2 text-emerald-400 placeholder-emerald-700 focus:outline-none focus:border-emerald-400 transition-colors resize-none"
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              required
            />
          </div>

          {/* Submit Button */}
          <button
            disabled={buttonText !== "Send message"}
            type="submit"
            className="w-full py-3 bg-emerald-500 text-black rounded-lg hover:bg-emerald-400 transition-colors font-medium flex items-center justify-center space-x-2 disabled:bg-emerald-100 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
            <span>{buttonText}</span>
          </button>
        </form>
      </div>
    </div>
  );
}