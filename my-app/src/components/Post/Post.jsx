import React from 'react';
import Divider from '../Divider/Divider';

const Post = () => {
    return (
      <div>
        <h2 className="text-center text-xl mb-2 text-info">Create a post...</h2>
        <form className="w-3/4 mx-auto">
          <div className="text">
            <textarea
              className="textarea textarea-info w-full h-32 default-bg text-info text-xl"
              placeholder="Write here...."
            ></textarea>
          </div>
          <div className="photo text-center">
            <input
              type="file"
              className="file-input file-input-bordered file-input-info default-bg text-info"
              accept=".jpg"
            />
          </div>
          <div className="submit text-center my-4">
            <button className="btn btn-info text-info  default-bg">
              Submit
            </button>
          </div>
        </form>
        <Divider></Divider>
      </div>
    );
};

export default Post;