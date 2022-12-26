import React, { useContext } from 'react';
import { userInfo } from '../../context/AuthProvider';
import Post from '../Post/Post';
import TrendingSection from '../TrendingSection/TrendingSection';
const Home = () => {
  const {user} = useContext(userInfo)
  // console.log(user)
    return (
      <div>
        {user && <Post></Post>}
        <TrendingSection></TrendingSection>
      </div>
    );
};

export default Home;