import React from "react";
import ReactDOM from "react-dom";
import "./normalize.css";
import "./screen.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./header";
import About from "./about";
import Projects from "./projects";
import Cookie from "./cookie";
import Other from "./otherProjects";
import Contact from "./contact";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <About />
    <Projects />
    <Other />
    <Contact />
    <Cookie />
  </React.StrictMode>,
  document.getElementById("root")
);

AOS.init({
  easing: "ease-in",
});
