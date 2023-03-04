import React from 'react';
import './App.css';
import Layoute from './compontent/Layoute/Layoute';
import Footer from './Footer/Footer';
import Header from './Header/Header';





function App() {
  return (
    <div className="App">
      <Header />
      <Layoute>
        <main>
          <span>products</span>
        </main>
      </Layoute>
      <Footer />
    </div>
  );
}

export default App;