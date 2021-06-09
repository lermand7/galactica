import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import { BrowserRouter as Router} from "react-router-dom";

class App extends React.Component {

  render() {
    return(
      <div className="app">
        <>
          <Router>
            <NavBar />
            <Content />
          </Router>
        </>
      </div>
    );
  }
}


export default App;