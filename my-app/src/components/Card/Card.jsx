import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({posts}) => {
  // console.log(posts)
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-4 default-bg">
        {posts.map((post) => {
          return (
            <div key={post._id}>
              <div className="card w-96 bg-base-100 shadow-xl default-bg text-info">
                <figure className="px-10 pt-10">
                  <img
                    src={post.post_photo}
                    alt={post.post}
                    className="rounded-xl h-72	"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  {post.post.length > 50 ? (
                    <p className="text-justify">{post.post.slice(0, 50)}....</p>
                  ) : (
                    <p className="text-justify">{post.post}</p>
                  )}
                  <div className="card-actions">
                    <button className="btn border-info text-info default-bg">
                      <Link to={`/media/${post._id}`}>Details</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
};

export default Card;