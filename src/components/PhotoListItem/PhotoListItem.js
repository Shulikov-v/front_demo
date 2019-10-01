import React from 'react';
import { Link } from 'react-router-dom';

function PhotoListItem({ image }) {
  return (
    <div>
      <Link to={`/photo/${image.id}`} className="photo-list-item-link">
        <img src="https://fakeimg.pl/100x100/" alt={image.name} />
      </Link>
      <style jsx global>{`
        .photo-list-item-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          background: none;
          color: #41403e;
        }
        .photo-list-item-link > img {
          margin-right: 15px;
        }
      `}</style>
    </div>
  )
}

export default PhotoListItem
