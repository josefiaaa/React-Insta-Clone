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
                            <h3>{user.username}</h3>
                        </div>
                        <img className ="post-image" src={user.imageUrl} alt={user.timestamp}/>
                        <h4>{user.likes} likes</h4>                        
                    </div>
                    <CommentSection 
                         
                    />
                </div>
            )}
        </div>
    )
}

// {this.state.dummyData.map((post, index) => (
//     <Post key={index} post={post} />

export default Post;