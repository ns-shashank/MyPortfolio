import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ success: null, message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ success: null, message: "" });

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          setStatus({ success: true, message: "Your message has been sent successfully!" });
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setStatus({ success: false, message: "Something went wrong. Please try again." });
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <section className="bg-[#0f172a] text-white px-6 md:px-20 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Contact <span className="text-yellow-400">Me</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            I’m available for freelance projects, collaborations, internships,
            and professional opportunities. Whether you’re looking for a UI/UX
            designer to bring your ideas to life, a developer to build modern
            web applications, or a teammate to contribute to your project, feel
            free to reach out. I’d be happy to discuss how we can work together
            and create something impactful.
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side Info */}
          <div className="space-y-6 text-gray-300">
            <div>
              <p className="text-yellow-400 font-semibold">Address _</p>
              <p>Bangalore, Karnataka - 560016</p>
              <p>India</p>
            </div>
            <div>
              <p className="text-yellow-400 font-semibold">Phone _</p>
              <p>+91 8277206946</p>
            </div>
            <div>
              <p className="text-yellow-400 font-semibold">Email _</p>
              <p>nsshashankl@gmail.com</p>
            </div>
          </div>

          {/* Right Side Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="from_name"
              aria-label="Name"
              placeholder="Name"
              required
              minLength={2}
              className="w-full px-4 py-3 bg-[#1e293b] text-white rounded focus:outline-none"
            />
            <input
              type="email"
              name="reply_to"
              aria-label="Email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 bg-[#1e293b] text-white rounded focus:outline-none"
            />
            <textarea
              name="message"
              aria-label="Message"
              rows="5"
              placeholder="Message"
              required
              minLength={5}
              className="w-full px-4 py-3 bg-[#1e293b] text-white rounded focus:outline-none"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSending}
              className={`${
                isSending ? "opacity-50 cursor-not-allowed" : ""
              } bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md shadow hover:bg-yellow-500 transition`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {/* Status Messages */}
            {status.message && (
              <p
                className={`mt-3 text-sm ${
                  status.success ? "text-green-400" : "text-red-400"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
