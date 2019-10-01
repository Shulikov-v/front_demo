import React from 'react'

function UserList({children}) {
  return (
    <div className="row border border-primary" style={{padding: 10, maxHeight: 400, overflow: 'auto'}}>
      {children}
    </div>
  )
}

export default UserList
