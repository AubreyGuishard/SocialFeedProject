import React, { useState } from "react";

const Post = props => {
    const [name, setName] = useState('')
    const [post, setPost] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e);
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
    <post onSubmit={handleSubmit}>
        <div>
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={handleName} />
        </div>
        <div>
            <label htmlFor="">Post</label>
            <input type="text" value={post} onChange={handlePost}/>
        </div>
        <button type="submit">create</button>
    </post> );
}
 
export default Post;