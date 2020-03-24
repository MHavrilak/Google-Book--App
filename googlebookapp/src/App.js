import React from 'react';
import './App.css';
import Nav from "../components/NavBar";
import searchBooks from "./pages/searchBooks";


function App() {
  return (
      <div>
        <Nav />
        <searchBooks />
      </div>
    );
  }
  
export default App;
  
