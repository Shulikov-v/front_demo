import React from 'react';
import { Link } from 'react-router-dom'

function ProjectListItem({project}) {
  return (
    <p className="row sm-12 md-12 project-list-item">
      <Link to={`/project/${project.id}`} className="project-list-item-link">
        <img src="https://fakeimg.pl/100x100/" alt={project.name}></img>
        {project.name}
      </Link>
      <style jsx global>{`
        .project-list-item-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          background: none;
          color: #41403e;
        }
        .project-list-item-link > img {
          margin-right: 15px;
        }
      `}</style>
    </p>
  )
}

export default ProjectListItem
