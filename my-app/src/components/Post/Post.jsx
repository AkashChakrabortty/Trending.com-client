import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userInfo } from '../../context/AuthProvider';
import Divider from '../Divider/Divider';

const Post = () => {
  const { user } = useContext(userInfo);
  let photoUrl;
  const navigate = useNavigate();
  const handleForm = (event) => {
    event.preventDefault();
    const text = event.target.text.value;
    const img = event.target.photo.files[0];
    const imgbb_key = process.env.REACT_APP_imgbb_key;
    const milliseconds = new Date().getTime();

    const formData = new FormData();
    formData.append("image", img);

    const url = `https://api.imgbb.com/1/upload?key=${imgbb_key}`;
    if (text.trim().length > 0 || img) {
      
     fetch(url, {
       method: "POST",
       body: formData,
     })
       .then((res) => res.json())
       .then((data) => {
         photoUrl = data.data.display_url;
       })
       .then(() => {
         const post = {
           user_email: user.email,
           post: text.trim(),
           post_photo: photoUrl,
           user_name: user.displayName,
           user_photo: user.photoURL,
           milliseconds: milliseconds,
           totalLoves: 0
         };
        fetch("http://localhost:5000/post", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(post),
        })
          .then((res) => res.json())
          .then((data) => navigate("/media"));
       });
    } else {
      alert("You can't post empty");
    }
   }
    return (
      <div>
        <h2 className="text-center text-xl mb-2 text-info">Create a post...</h2>
        <form className="w-3/4 mx-auto" onSubmit={handleForm}>
          <div className="text">
            <textarea
              className="textarea textarea-info w-full h-32 default-bg text-info text-xl"
              name="text"
              placeholder="Write here...."
            ></textarea>
          </div>
          <div className="photo text-center">
            <input
              type="file"
              className="file-input file-input-bordered file-input-info default-bg text-info"
              name="photo"
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