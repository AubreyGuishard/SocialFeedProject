import React, { useState } from "react";
import './Post.css';

const Post = props => {
    const [likedStatus, setLikedStatus] = useState('inactive');
    const [dislikedStatus, setDislikedStatus] = useState('inactive');

    const handleLike = () => {
        if (likedStatus === 'inactive') setLikedStatus('active');
        else setLikedStatus('inactive');
        setDislikedStatus('inactive');
    };

    const handleDislike = () => {
        if (dislikedStatus === 'inactive') setDislikedStatus('active');
        else setDislikedStatus('inactive');
        setLikedStatus('inactive');
    };



    return(
    <div>
        <h3>{props.post.name}</h3>
        <p>{props.post.post}</p>
        <button className={likedStatus} onClick={handleLike}>Like</button>
        <button className={dislikedStatus} onClick={handleDislike}>Dislike</button>
    </div>
    );
};
 
export default Post;