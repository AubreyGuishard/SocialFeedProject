import React from "react";

const PostList = (props) => {
   let mappedPost = props.posts.map(post => {
    return (<div>
        <h3>{post.name}</h3>
        <p>{post.post}</p>
    </div>)
   }) 
    return ( <div>
        {mappedPost}
    </div> );
}
 
export default PostList;