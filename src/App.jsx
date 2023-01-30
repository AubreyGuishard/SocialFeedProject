import React, { useState } from 'react';
import NamePresenter from './Component/CustomButton/NamePresenter';
import Post from './Post/Post';
import PostList from './PostList/PostList';
import CreatePostForm from './CreatePostForm/CreatePostForm';
import NavBar from './NavBar/NavBar';
import './App.css';

//import CustomButton from './Component/CustomButton';


function App() {

  const [name, setName] = useState([{Name: "Aubrey", Post: "This is a Test!"}])
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Post</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Aubrey 
            </td>
            <td>
              This is a test
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
