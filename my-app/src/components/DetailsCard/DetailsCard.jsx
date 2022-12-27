import React, { useContext } from 'react';
import { AiTwotoneHeart } from "react-icons/ai";
import { useLoaderData } from 'react-router-dom';
import { userInfo } from '../../context/AuthProvider';
import Divider from '../Divider/Divider';
const DetailsCard = () => {
    const loaderData =  useLoaderData();
    const {user} = useContext(userInfo)
    // const notify = (a) => toast(a);
    const handleReaction = () => {
      const loveInfo = {
        post_owner: loaderData.user_name,
        post_owner_email: loaderData.user_email,
        post_owner_Photo: loaderData.user_photo,
        post: loaderData.post,
        post_photo: loaderData.post_photo,
        love_giver_name: user.displayName,
        love_giver_email: user.email,
        love_giver_photo: user.photoURL,
        previous_id: loaderData._id,
      };

      fetch(`http://localhost:5000/love`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(loveInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged === false) {
            // notify('Love remove')
            // setReFetch(!reFetch);
          } else {
            //  notify("Love");
            // setReFetch(!reFetch);
          }
        });


    };

     const handleForm = (event) => {
       event.preventDefault();
       const text = event.target.text.value;
       if (text.trim().length === 0) {
        alert(`You can't comment empty`);
       } else {
         const milliseconds = new Date().getTime();

         const commentInfo = {
           post: loaderData.post,
           post_photo: loaderData.post_photo,
           post_owner_email: loaderData.user_email,
           post_owner_name: loaderData.user_name,
           post_owner_photo: loaderData.user_photo,
           milliseconds: milliseconds,
           previous_id: loaderData._id,
           comment_giver_name: user.displayName,
           comment_giver_email: user.email,
           comment_giver_photo: user.photoURL,
           comment: text,
         };
         //insert db
         fetch("http://localhost:5000/comment", {
           method: "POST",
           headers: {
             "content-type": "application/json",
           },
           body: JSON.stringify(commentInfo),
         })
           .then((res) => res.json())
           .then((data) => {
             event.target.reset();
           });
       }
     };
    return (
      <div className="w-9/12 mx-auto border-2 border-info p-4 rounded text-info default-bg">
        <div className="avatar">
          <div className="w-10 rounded-full ring ring-info">
            <img src={loaderData.user_photo} alt={loaderData.user_name} />
          </div>
        </div>
        <h3 className="text-2xl">{loaderData.user_name}</h3>
        <p className="">{new Date(loaderData.milliseconds).toUTCString()}</p>
        <Divider></Divider>
        <p className="">{loaderData.post}</p>
        <div>
          <img
            src={loaderData.post_photo}
            alt={loaderData.post}
            className="h-72"
          />
        </div>
        <div className="reaction my-3">
          <button
            className="btn btn-outline btn-info text-xl mb-2"
            onClick={handleReaction}
          >
            <AiTwotoneHeart></AiTwotoneHeart>
          </button>
          <form onSubmit={handleForm} className='flex gap-2 items-center'>
            <textarea
              className="textarea textarea-info w-full h-20 default-bg text-info"
              name="text"
              placeholder="Write here...."
            ></textarea>
            <button
              className="btn btn-outline btn-info mb-2"
              type='submit'
            >
             Comment
            </button>
          </form>
        </div>
        <Divider></Divider>
        <div className="all-comments"></div>
      </div>
    );
};

export default DetailsCard;