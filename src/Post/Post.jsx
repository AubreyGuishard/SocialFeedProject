import React, { useState } from "react";

const Post = props => {
    <div>
        <h3>{props.post.name}</h3>
        <p>{props.post.post}</p>
        <button>Like</button>
        <button>Dislike</button>
    </div>
}
 
export default Post;