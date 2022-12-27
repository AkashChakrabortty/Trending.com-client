import React, { useContext } from 'react';
import { AiTwotoneHeart } from "react-icons/ai";
import { useLoaderData } from 'react-router-dom';
import { userInfo } from '../../context/AuthProvider';
import Divider from '../Divider/Divider';

const DetailsCard = () => {
    const loaderData =  useLoaderData();
    const {user} = useContext(userInfo)
  
    const handleReaction = (post) => {
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
        //   if (data.acknowledged === false) {
        //     // setReFetch(!reFetch);
        //   } else {
        //     // setReFetch(!reFetch);
        //   }
        console.log(data)
        });


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
          <button className="btn btn-outline btn-info text-xl mb-2" onClick={handleReaction}>
            <AiTwotoneHeart></AiTwotoneHeart>
          </button>
          <textarea
            className="textarea textarea-info w-full h-20 default-bg text-info"
            name="text"
            placeholder="Write here...."
          ></textarea>
        </div>
        <div className="all-comments">
            
        </div>
      </div>
    );
};

export default DetailsCard;