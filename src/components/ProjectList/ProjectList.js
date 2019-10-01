import React from 'react'

function ProjectList({children}) {
  return (
    <div className="row border border-primary project-list">
      {children}
      <style jsx>{`
      .project-list {
        padding: 10px;
        max-height: 400px;
        overflow: auto;
      }
    `}</style>
    </div>
  )
}

export default ProjectList
