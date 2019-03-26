import React from 'react';

import './Comments.css';

const Comment = props => {
    console.log(props);
    return (
        <div className="comment">
            <h4 className='usersName' >{props.username}</h4> 
            <p>{props.text}</p>
        </div>
    )
}

export default Comment;