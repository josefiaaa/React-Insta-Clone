import React from 'react';

import Comment from './Comment';

const CommentSection = props => {
    // console.log(props)
    return (
    
        <div className='commentCont'>
            {props.comments.map((comment, index) => 
                <Comment key={index} username={comment.username} text={comment.text} onChange={props.handleChange} onSumbit={props.handleSubmit} />
            )}
        </div>

    )
}

export default CommentSection;