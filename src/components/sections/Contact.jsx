import { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import emailjs from "emailjs-com";
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handlesubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("message sent");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("something went wrong .please try again"));
  };
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="px-4 w-100 ">
          <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-900 to-red-500 bg-clip-text text-transparent text-center">
            For contact
          </h1>
          <form className="space-y-6" onSubmit={handlesubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                placeholder="Name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-red-900 focus:bg-blue-500/5"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                id="email"
                required
                value={formData.email}
                placeholder="EMAIL-ID"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-red-900 focus:bg-blue-500/5"
              />
            </div>
            <div className="relative">
              <textarea
                name="message"
                id="message"
                required
                value={formData.message}
                placeholder="Message"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-red-900 focus:bg-blue-500/5"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-900 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(259,13,24,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
