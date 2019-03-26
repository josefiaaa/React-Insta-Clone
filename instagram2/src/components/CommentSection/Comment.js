import React from 'react';

const Comment = props => {
    return (
        <div className="comment">
            <h4>{props.username}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default Comment;