import React from "react";

const PostList = (props) => {
   let mappedPost = props.posts.map(element => {
    return (<div>
        <h3>{element.Name}</h3>
        <p><h4>{element.Post}</h4></p>
    </div>)
   }) 
    return ( <div>
        {mappedPost}
    </div> );
}
 
export default PostList;