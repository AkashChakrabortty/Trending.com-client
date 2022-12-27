import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
const Media = () => {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);
    return (
      <div>
        <Card posts={posts}></Card>
      </div>
    );
};

export default Media;