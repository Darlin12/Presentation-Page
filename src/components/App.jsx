import React from "react";
import Hero from "./Hero";
import Skills from "./Skills";
import ResumeSection from "./ResumeSection";
import ProjectCard from "./ProjectCard";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
//Project Data
import projects from "../../public/data/projects";

function App() {
  return (
    <div className="root">
      <Hero />
      <AboutMe />
      <Skills />
      <ResumeSection />
      <div class="projects-container">
        <h2>Personal Projects</h2>
        <div class="projects-cards-container">
          {projects.map((project)=>{
              return (
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imgUrl={project.imgUrl}
                  url={project.url}
                />
              );
            })}
        </div>
      </div>
      
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
