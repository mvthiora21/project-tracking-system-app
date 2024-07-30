import React from 'react';

const ProjectDetails = ({ project }) => {
  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p>Owner: {project.owner}</p>
      <p>Github: <a href={project.githubLink}>{project.githubLink}</a></p>
      <p>Members: {project.members.join(', ')}</p>
    </div>
  );
};

export default ProjectDetails;
