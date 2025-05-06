import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import MomentsGallery from './Components/MomentsGallery/MomentsGallery';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MomentsGallery />
      <Footer/>
      
      
    </div>
  );
}


export default App;
