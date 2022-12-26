import React from 'react';
import Footer from '../Footer/Footer';
import Nav from '../nav/nav';
import Post from '../Post/Post';
import TrendingSection from '../TrendingSection/TrendingSection';
const Home = () => {
    return (
      <div>
        <Nav></Nav>
        <Post></Post>
        <TrendingSection></TrendingSection>
        <Footer></Footer>
      </div>
    );
};

export default Home;