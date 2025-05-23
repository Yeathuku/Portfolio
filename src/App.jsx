import { use, useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import { NavBAr } from "./components/NavBar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Project } from "./components/sections/Project";
import { Contact } from "./components/sections/Contact";
function App() {
  const [isloading, setIsloading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isloading && <LoadingScreen onComplete={() => setIsloading(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isloading ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <NavBAr menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default App;
