import React from 'react';
import { Link } from 'react-router-dom'

function UserListItem({user}) {
  return (
    <p className="row sm-12 md-12" style={{}}>
      <Link to={`/user/${user.id}`} style={{display: 'flex', alignItems: 'center', textDecoration: 'none', background: 'none', color: '#41403e'}}>
        <img src="https://fakeimg.pl/100x100/" style={{marginRight: 15}} alt={user.name}></img>
        {user.name}
      </Link>
    </p>
  )
}

export default UserListItem
