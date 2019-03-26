import React from 'react';

import Comment from './Comment';

const CommentSection = props => {
    console.log(props)
    return (
    
        <div>
            {props.comments.map((comment, index) => 
                <Comment key={index} username={comment.username} text={comment.text} />
            )}
        </div>

    )
}

export default CommentSection;