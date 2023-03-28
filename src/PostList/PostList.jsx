import React from "react";
import Post from "../Post/Post";
const PostList = (props) => {
   let mappedPost = props.posts.map(post => {
    return (
        <Post post={post}/>
    )
   }) 
    return ( <div>
        {mappedPost}
    </div> );
}
 
export default PostList;