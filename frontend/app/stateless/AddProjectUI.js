import React from 'react';

const AddProject = (props) => {
  return (
    <div>
      <p>Add Project</p>
      <input type="text" placeholder="title" onChange={props.onInput} name="projectTitle"></input><br/>
      <input type="text" placeholder="image" onChange={props.onInput} name="projectThumbnail"></input><br/>
      <input type="text" placeholder="skills" onChange={props.onInput} name="projectSkills"></input><br/>
      <input type="text" placeholder="project Image" onChange={props.onInput} name="projectImage"></input><br/>
      <textarea type="textarea" placeholder="project Description" onChange={props.onInput} name="projectContent"></textarea><br/>
      <button type="button" onClick={props.onAddProject}>Add Project</button>
    </div>
  );
};

export default AddProject;
