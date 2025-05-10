import { RevealOnScroll } from "./RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7x-l font-bold mb-6 bg-gradient-to-r from-red-600 to-blue-400 bg-clip-text  text-transparent leading-right">
            Hi, I'm Nishar Ahamed
          </h1>
          <p className="tex-gray-400 text-lg mb-8  max-w-lg mx-auto">
            I'm Front End developer
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-red-900 text-white py-3 px-6 rounded font-medium transition relative overflow-hiddden
            hover:-translate-y-0.5 
            hover:shadow-[0_0_15px_rgba(234,34,36,0.4)] "
            >
              view project
            </a>
            <a
              href="#contact"
              className="border border-red-500/50 text-red-500 py-3 px-6 rounded font-medium transition-all duration-200
            hover:-translate-y-0.5 
            hover:shadow-[0_0_15px_rgba(234,34,36,0.4)]
            hover:bg-red-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
