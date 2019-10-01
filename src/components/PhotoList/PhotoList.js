import React from 'react'

function PhotoList({ children }) {
  return (
    <div className="row border border-primary image-list">
      {children}
      <style jsx>{`
      .image-list {
        padding: 10px;
        max-height: 400px;
        overflow: auto;
      }
    `}</style>
    </div>
  )
}

export default PhotoList
