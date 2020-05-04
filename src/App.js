import React from 'react';
import MainPage from './components/MainPage.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Linker from './Linker.js'

function App() {
  AOS.init({
    offset: 250,
    duration: 800
  });
  return (
      <div className="App">
        <MainPage />
      </div>
  );
}

export default App;
