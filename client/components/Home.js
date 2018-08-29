import React from 'react';
import Header from './molecules/Header';
import ProjectList from './organisms/ProjectList';
import About from './organisms/About';

const Home = () => {
  return (
    <div className='container'>
      <Header />
      <ProjectList />
      <About />
    </div>
  );
}

export default Home;