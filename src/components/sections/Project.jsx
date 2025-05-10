import { RevealOnScroll } from "./RevealOnScroll";
export const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="max-w-3wl mx-auto px-15 rounded-xl p-8 border-white/10 border border">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Projects
          </h2>
          <div className="grid gap-6">
            <div>
              <h3 className="text-xl font-bold mr-4 mb-2 bg-gradient-to-r from-red-800 to-purple-700 bg-clip-text text-transparent">
                Bussiness Insurance
              </h3>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  Developed a web-based UI application to enhance an existing
                  actuarial tool.
                </li>
                <li>
                  Built intuitive forms for customer data submission and
                  tracking, with client-side validation and error handling.
                </li>
                <li>
                  Implemented UI enhancements using React.js and integrated
                  feedback from stakeholders to improve usability.
                </li>
                <li>
                  Conducted manual and automated QA testing to ensure
                  functionality and performance.
                </li>
                <li>
                  Utilized Jenkins CI/CD pipelines for deployment and Rally for
                  agile task management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
