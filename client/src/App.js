import React from 'react';
import Navbar from "./components/Navbar";
import ImageAnalysisProvider from './contexts/ImageAnalysisContext';
import IsLoadingContextProvider from './contexts/IsLoadingContext';
import Homepage from "./components/Homepage.js";
import Footer from "./components/Footer.js"


function App() {
  return (
    <div className="App">
      <Navbar />
      <IsLoadingContextProvider>
        <ImageAnalysisProvider>
          <Homepage />  
        </ImageAnalysisProvider>
      </IsLoadingContextProvider>
      <Footer />
    </div>
  );
}

export default App;
