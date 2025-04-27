import React, { useState } from "react";
import "../App.css";

function Mail() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/send", {
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
    } catch (error) {
      setStatus("error");
      setStatusMessage("Something went wrong. Try again later.");
    }

    setTimeout(() => {
      setStatus("idle");
      setStatusMessage("");
    }, 5000);
  };

  return (
    <div className="media pb-4">
      <h1 className="text-3xl font-bold mb-4 text-[var(--primary-300)]">Contact Me</h1>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          required
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-2 rounded-xl text-[var(--text-200)] bg-[var(--bg-300)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-200)]"
        />

        <textarea
          required
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-gray-300 p-2 rounded-xl text-[var(--text-200)] bg-[var(--bg-300)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-200)] h-40 resize-none"
        />

        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-[var(--primary-200)] text-[var(--accent-200)] font-bold py-2 px-4 rounded hover:bg-[var(--primary-300)] transition-colors disabled:opacity-50"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></span>
          ) : (
            "Send Message"
          )}
        </button>

        {status !== "idle" && (
          <div className={`flex items-center gap-2 mt-2 transition-opacity duration-500 ${status === "success" ? "text-green-500" : "text-red-500"}`}>
            {status === "success" && (
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
            {status === "error" && (
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            <p className="text-sm">{statusMessage}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Mail;
