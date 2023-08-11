import logo from './logo.svg';
import './App.css';
import { useNavigate }  from "react-router-dom";
import React from 'react';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <h1>Welcome to Andrew's Image Search!</h1>
      <button onClick = {() => {navigate("/Search")}}>
        Go to Search!
      </button>
    </div>
  );
}

export default App;
