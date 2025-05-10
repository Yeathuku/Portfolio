import { RevealOnScroll } from "./RevealOnScroll";
export const Contact = () => {
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
          <form className="space-y-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                required
                placeholder="Name"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-red-900 focus:bg-blue-500/5"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                id="email"
                required
                placeholder="EMAIL-ID"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-red-900 focus:bg-blue-500/5"
              />
            </div>
            <div className="relative">
              <textarea
                name="message"
                id="message"
                required
                placeholder="Message"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-red-900 focus:bg-blue-500/5"
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
