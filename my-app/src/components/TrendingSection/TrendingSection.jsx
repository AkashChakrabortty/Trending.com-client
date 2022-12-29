import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const TrendingSection = () => {
  const [posts,setPosts] = useState([])
   useEffect(() => {
     fetch(`https://trending-com-server.vercel.app/trendingPosts`)
       .then((res) => res.json())
       .then((data) => {
         setPosts(data);
       });
   }, []); 
    return (
      <div className="">
        <h2 className="text-center text-xl mb-2 text-info">Trending Post</h2>
        <div >
          <Card posts={posts}></Card>
        </div>
      </div>
    );
};

export default TrendingSection;