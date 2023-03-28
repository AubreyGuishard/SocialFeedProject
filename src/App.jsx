import React, { useState } from 'react';
import NamePresenter from './Component/CustomButton/NamePresenter';
import Post from './Post/Post';
import PostList from './PostList/PostList';
import CreatePostForm from './CreatePostForm/CreatePostForm';
import NavBar from './NavBar/NavBar';
import './App.css';

//import CustomButton from './Component/CustomButton';


function App() {

  const [posts, setPosts] = useState([{name: "Aubrey", post: "This is a Test!"}, {Name: "Aubre", Post: "This is a Test!!"}])
 
  function addNewEntry(e){
    let tempEntries = [e,...posts];
    
    setPosts(tempEntries);
  }

  return (
    <div className="App">
     <section id='post'>
      <NavBar/>
      <h3>Post</h3>
      <CreatePostForm addNewEntryProperty={addNewEntry}/>
      <PostList posts={posts}/>
     </section>
    </div>
  );
}

export default App;
