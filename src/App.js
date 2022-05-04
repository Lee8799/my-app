import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import NavBar from "./components/NavBar";
import Home from "./components/Home.js";
import Post from "./components/Post";
import Login from "./components/Login";
import Register from './components/Register';
import NewPost from './components/NewPost';
import EditPost from './components/EditPost';
import DeletePost from './components/DeletePost';

import './App.css';


function App() {
  const [logIn, setLogin] = useState ('false')
  useEffect(() => {
   localStorage.getItem('token')? setLogin(true):setLogin(false)

  },[])
  return (
    <Router>
      <div className="App">
      <NavBar/>
        <div className="routes">
          <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Post" element={<Post/>}/>
          <Route exact path="/Login" element={<Login setLogin={logIn}/>}/>
          <Route exact path="/Register" element={<Register/>}/>
          <Route exact path="/NewPost" element={<NewPost/>}/>
          <Route exact path="/EditPost" element={<EditPost/>}/>
          <Route exact path="/DeletePost" element={<DeletePost/>}/>
          {/* <Route exact path="/DeletePost" element={<DeletePost/>}/> */}

          </Routes>
        </div>
    </div>
    </Router>
  );
}

export default App;
