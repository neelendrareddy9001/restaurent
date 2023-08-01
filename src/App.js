import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, Menu } from './container/index';

import Navbar from './components/Navbar/Navbar';

import './App.css';

const App = () => {
  return (
    <>
    <div>
        <Navbar />
        <Header />
        <AboutUs />
        <Menu />
        {/* <FindUs />
        <Chef />
        <Footer />
        <Intro />
        <Gallery />
        <Laurels />
  */}
         
    </div>
    </>
  )
}

export default App