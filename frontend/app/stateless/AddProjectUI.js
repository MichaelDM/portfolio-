import React from 'react';

const AddProject = (props) => {
  return (
    <div>
      <p>Add Project</p>
      <input placeholder="title" onChange={props.onInput} name="projectTitle"></input><br/>
      <input placeholder="image" onChange={props.onInput} name="projectThumbnail"></input><br/>
      <input placeholder="skills" onChange={props.onInput} name="projectSkills"></input><br/>
      <input placeholder="Project Image" onChange={props.onInput} name="projectImage"></input><br/>
      <textarea placeholder="Project Description" onChange={props.onInput} name="projectContent"></textarea><br/>
      <button type="button" onClick={props.onAddProject}>Add Project</button>
    </div>
  );
};

export default AddProject;
