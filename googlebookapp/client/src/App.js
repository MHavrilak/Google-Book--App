import React  from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
// import Nav from "./components/Nav";
import SearchBooks from "./pages/searchBooks";
import SaveBooks from "./pages/saveBooks";


function App() {
  return (
      <div>
        {/* <Nav /> */}
        <Router>

        <Route exact path="/" component={SearchBooks}/>
        <Route exact path="/saveBooks" component={SaveBooks} />
        </Router>
      </div>
    );
  }
  
export default App;
  
