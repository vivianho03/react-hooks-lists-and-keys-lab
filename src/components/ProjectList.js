import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const projectDisplay = projects.map((project) => {
    return <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies}/>
    //parent assigns what the prop is
    // destructuring: return <ProjectItem key={project.id} project={project} />
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
          {projectDisplay}
      </div>
    </div>
  );
}

export default ProjectList;
