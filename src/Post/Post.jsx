import React, { useState } from "react";

const Post = props => {
    const [name, setName] = useState('')
    const [post, setPost] = useState('')

    function handleSubmit(e){
        e.preventDefault();
       let newEntry = {
        name: name,
        post: post
       };
       console.log(newEntry);
       props.addNewEntryProperty(newEntry)
    };

    const handleName = e => {
        setName(e.target.value);
        console.log(e.target.value);
    };

    const handlePost = e => {
        setPost(e.target.value);
        console.log(e.target.value);
    };


    return ( 
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={handleName} />
        </div>
        <div>
            <label htmlFor="">Post</label>
            <input type="text" value={post} onChange={handlePost}/>
        </div>
        <button type="submit">create</button>
    </form> );
}
 
export default Post;