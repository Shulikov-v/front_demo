import React from 'react'

function UserList({children}) {
  return (
    <div className="row border border-primary user-list">
      {children}
    <style jsx>{`
      .user-list {
        padding: 10px;
        max-height: 400px;
        overflow: auto;
      }
    `}</style>
    </div>
  )
}

export default UserList
