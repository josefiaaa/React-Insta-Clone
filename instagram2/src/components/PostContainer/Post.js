import React from 'react';

import './profile.css'
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
    console.log(props);
    return (
        <div>
            {props.profile.map(user => 
                <div className='postSpacer' key={user.timestamp}>
                    <div className='postCont'>
                        <div className='postHeader'>
                            <div className="user-logo-cont">
                                <img className='user-logo' src={user.thumbnailUrl} alt='profile' />    
                            </div>
                            <p className='user'>{user.username}</p>
                        </div>
                        <img className ="post-image" src={user.imageUrl} alt={user.timestamp}/>
                        <div className="bottomCont">
                            <div className="icons">
                            <i className="far fa-heart"></i>
                            <i className="far fa-comment"></i>
                            </div>

                            <h4>{user.likes} likes</h4>                        
                        
                            <CommentSection 
                                comments={user.comments}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

// {this.state.dummyData.map((post, index) => (
//     <Post key={index} post={post} />

export default Post;