import React from 'react';

import PropTypes from 'prop-types';

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

Comment.propTypes= {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Comment;