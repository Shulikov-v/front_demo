import React from 'react';
import { Link } from 'react-router-dom'

function ProjectListItem({project}) {
  return (
    <p key={project.id} className="row sm-12 md-12" style={{}}>
      <Link to={`/project/${project.id}`} style={{display: 'flex', alignItems: 'center', textDecoration: 'none', background: 'none', color: '#41403e'}}>
        <img src="https://fakeimg.pl/100x100/" style={{marginRight: 15}} alt={project.name}></img>
        {project.name}
      </Link>
    </p>
  )
}

export default ProjectListItem
