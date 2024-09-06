import React from "react";
import SkillList from "./SkillList";
import skills_object from "../../public/data/skill";

function Skills() {
  return (
    <div className="skills-container">
        <div className="skills-heading"><h2>Skills</h2></div>
        <div className="skills-categories">
        <div className="front-end skills"><h3>Front-End</h3><SkillList list={skills_object.frontend} /></div>
        <div className="back-end skills"><h3>Back-End</h3><SkillList list={skills_object.backend} /></div>
        <div className="automation skills"><h3>QA Automation</h3><SkillList list={skills_object.automation} /></div>
      </div>
      
    </div>
  );
}

export default Skills;
