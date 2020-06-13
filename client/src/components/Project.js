import React from "react";

const Project = ({ projects }) => {
  return (
    <div>
      <center>
        <h1>Project List</h1>
      </center>
      {projects.map((project) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">ID: {project.id}</h5>
            <h4 class="card-subtitle mb-2 text-muted">Name: {project.name}</h4>
            <h6 class="card-subtitle mb-2 text-muted">
              Description: {project.description}
            </h6>
            <button type="button" class="btn btn-light">
              Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
