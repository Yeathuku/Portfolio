import React from "react";
import image from "/src/assets/images.png";
import html from "/src/assets/html.jpeg";
import css from "/src/assets/css.png";
import js from "/src/assets/js.png";
import tcss from "/src/assets/tcss.jpeg";
import java from "/src/assets/corejava.png";
import { RevealOnScroll } from "./RevealOnScroll";
export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center jusify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3wl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border ">
            <p className="text-gray-200 mb-6">
              Full Stack Developer with 3+ years of experience designing,
              developing, testing, and deploying scalable web applications.
              Proficient in front-end and back-end technologies
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-x1 border-white/10 border hover:-translate-y-1 transiyion-all">
                <h3 className="text-xl font-bold mr-4   font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Frontend
                </h3>
                <div className="flex">
                  <img
                    src={image}
                    alt="images"
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 h-15 w-15 p-2"
                  ></img>
                  <img src={html} alt="HTML Image" className="h-15 w-15 p-2" />
                  <img src={css} alt="css Image" className="h-15 w-15 p-2" />
                  <img src={js} alt="js Image" className="h-15 w-15 p-2" />
                  <img src={tcss} alt="tcss Image" className="h-15 w-15 p-2" />
                </div>
              </div>
              <div className="p-6 rounded-x1 border-white/10 border hover:-translate-y-1 transiyion-all">
                <h3 className="text-xl font-bold mr-4   font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Backend
                </h3>
                <div className="flex">
                  <img
                    src={java}
                    alt="java image"
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 h-15 w-15 p-2"
                  ></img>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid cols-2 gap-6 mt-8">
              <div className="p-6 rounded-x1 border-white/10 border hover:-translate-y-1 transiyion-all">
                <h3 className="text-xl font-bold mr-4   font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Education
                </h3>
                <ul>
                  <li>
                    <strong>B.TECH</strong> computer science and engineering
                    <br></br>
                    Periyar Maniammai Institute of science and technology
                    <br></br>
                    2017-2021
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>{" "}
            {/*education div*/}
            <div className="grid grid-cols-1 md:grid cols-2 gap-6 mt-8">
              <div className="p-6 rounded-x1 border-white/10 border hover:-translate-y-1 transiyion-all">
                <h3 className="text-xl font-bold mr-4   font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Work experience
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <strong className="text-xl font-bold mr-4 mb-2 bg-gradient-to-r from-red-800 to-purple-700 bg-clip-text text-transparent">
                    Cognizant
                  </strong>
                  - Full Stack Developer
                  <li>
                    Developed and maintained web applications using React.js and
                    Java.
                  </li>
                  <li>
                    Specialized in front-end development; built responsive,
                    interactive UIs using React.js, HTML, CSS, and JavaScript.
                  </li>
                  <li>
                    Worked collaboratively with cross-functional teams to design
                    and implement new features.
                  </li>
                  <li>
                    Optimized application performance and ensured high-quality
                    user experiences.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
