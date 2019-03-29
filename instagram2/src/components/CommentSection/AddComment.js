import React from 'react';

import './Comments.css';



const AddComment = props => {
    
    return (
        <div className='commentForm'>
            <form onSubmit={props.handleSubmit}>
                <input
                className='commentInput'
                type='text'
                value={props.commentText}
                placeholder= 'Add a comment...'
                onChange={props.handleChange}
                >

                </input>
            </form>

        </div>
    )
    
}

export default AddComment;