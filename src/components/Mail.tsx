import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";
import CollapsibleSection from "./CollapsibleSection";

function Mail() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const API = import.meta.env.VITE_API_URL;
    if (!API) {
      setStatus("error");
      setStatusMessage("API URL is not defined.");
      return;
    }
    try {
      const res = await fetch(`${API}/api/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setStatusMessage("Message sent successfully!");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Failed to send message.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Try again later.");
    }

    setTimeout(() => {
      setStatus("idle");
      setStatusMessage("");
    }, 5000);
  };

  return (
    <CollapsibleSection title="Contact Me">

      <div className="box !bg-[rgba(29,46,61,0.4)] !backdrop-blur-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="text-xs font-medium text-[var(--text-200)] opacity-60 mb-1 block">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-xs font-medium text-[var(--text-200)] opacity-60 mb-1 block">
              Message
            </label>
            <textarea
              id="message"
              required
              placeholder="Tell me about your project or just say hi..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-input h-36 resize-none"
            />
          </div>

          <button
            type="submit"
            className="btn-submit self-start"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-[var(--bg-100)]"></span>
            ) : (
              <>
                <i className="ri-send-plane-2-line"></i>
                Send Message
              </>
            )}
          </button>

          <AnimatePresence>
            {status !== "idle" && status !== "loading" && (
              <motion.div
                className={`flex items-center gap-2 text-sm ${status === "success" ? "text-emerald-400" : "text-red-400"
                  }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {status === "success" ? (
                  <i className="ri-checkbox-circle-line text-lg"></i>
                ) : (
                  <i className="ri-error-warning-line text-lg"></i>
                )}
                <p>{statusMessage}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </CollapsibleSection>
  );
}

export default Mail;
