import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import RouterComponent from "./components/RouterComponent";
import './App.css';


function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <RouterComponent />
      </main>
    </Router >
  );
}

export default App;
