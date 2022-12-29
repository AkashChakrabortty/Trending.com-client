import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const TrendingSection = () => {
  const [posts,setPosts] = useState([])
   useEffect(() => {
     fetch(`http://localhost:5000/trendingPosts`)
       .then((res) => res.json())
       .then((data) => {
         setPosts(data);
       });
   }, []); 
    return (
      <div className="">
        <h2 className="text-center text-xl mb-2 text-info">Trending Post</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 justify-items-center">
          <Card posts={posts}></Card>
        </div>
      </div>
    );
};

export default TrendingSection;