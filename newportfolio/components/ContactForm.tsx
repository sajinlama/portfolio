"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactFormProps {
  onClose: () => void;
}

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm({ onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("sending");

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);
    form.append("access_key", "fc3c8b0a-c0c0-4af4-8107-a8acb075d98e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          onClose();
        }, 2200);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-md bg-zinc-950/90 border border-emerald-500/40 
                     rounded-xl p-6 sm:p-8 shadow-[0_0_30px_rgba(16,185,129,0.15)] z-10"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 text-emerald-500/80 hover:text-emerald-300 
                       transition-colors p-1 rounded-md hover:bg-emerald-950/40 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-emerald-400 tracking-wide drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
              Initialize Transmission
            </h2>
            <p className="text-xs sm:text-sm text-emerald-600/90 mt-1">
              Send a message directly to my terminal inbox.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-emerald-400 mb-1.5 tracking-wider">
                NAME
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-black/60 border border-emerald-500/40 rounded-lg px-3.5 py-2.5 
                           text-sm text-emerald-300 placeholder-emerald-800 focus:outline-none 
                           focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50 
                           transition-all cursor-text font-mono"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-emerald-400 mb-1.5 tracking-wider">
                EMAIL
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full bg-black/60 border border-emerald-500/40 rounded-lg px-3.5 py-2.5 
                           text-sm text-emerald-300 placeholder-emerald-800 focus:outline-none 
                           focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50 
                           transition-all cursor-text font-mono"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-emerald-400 mb-1.5 tracking-wider">
                MESSAGE
              </label>
              <textarea
                placeholder="Write your message here..."
                rows={4}
                className="w-full bg-black/60 border border-emerald-500/40 rounded-lg px-3.5 py-2.5 
                           text-sm text-emerald-300 placeholder-emerald-800 focus:outline-none 
                           focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50 
                           transition-all cursor-text resize-none font-mono"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            {/* Action Button */}
            <motion.button
              whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
              whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
              disabled={status !== "idle"}
              type="submit"
              className="w-full py-2.5 bg-emerald-500 text-black font-semibold text-sm rounded-lg 
                         hover:bg-emerald-400 transition-colors flex items-center justify-center 
                         space-x-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-80
                         shadow-[0_0_15px_rgba(16,185,129,0.3)] mt-2"
            >
              {status === "sending" && (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>TRANSMITTING...</span>
                </>
              )}

              {status === "success" && (
                <>
                  <CheckCircle2 className="w-4 h-4 text-black" />
                  <span>PACKET DELIVERED!</span>
                </>
              )}

              {status === "error" && (
                <span className="text-red-950 font-bold">TRANSMISSION FAILED</span>
              )}

              {status === "idle" && (
                <>
                  <Send className="w-4 h-4" />
                  <span>SEND MESSAGE</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}