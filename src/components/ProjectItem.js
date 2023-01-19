import React from "react";



function ProjectItem({ name, about, technologies }) {
  // destructing: const {name, about, technologies} = project
  const techList = technologies.map((tech)=>{
    return <span key={tech}>{tech}</span>
    //child have the name of the prop
  })
  
  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
          {techList}
      </div>
    </div>
  );
}

export default ProjectItem;
