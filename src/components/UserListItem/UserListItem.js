import React from 'react';
import { Link } from 'react-router-dom'

function UserListItem({user}) {
  return (
    <p className="row sm-12 md-12">
      <Link className="user-list-item-link" to={`/user/${user.id}`}>
        <img src="https://fakeimg.pl/100x100/" alt={user.name}></img>
        <span>{user.name}</span>
      </Link>
      <style jsx global>{`
        .user-list-item-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          background: none;
          color: #41403e;
        }
        .user-list-item-link > img {
          margin-right: 15px;
        }
      `}</style>
    </p>
  )
}

export default UserListItem
