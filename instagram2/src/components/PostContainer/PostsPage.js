import React from 'react';

import dummyData from'../../dummy-data';
import SearchHeader from '../SearchBar/SearchHeader';
import Post from './Post'

class PostsPage extends React.Component{

    constructor (props) {
        super(props);
    
        this.state = {
          profile : dummyData
        };
    
    }
    
    render() {
        return (
            <div className="App">
            <SearchHeader />
            <Post profile={this.state.profile} />
            </div>
        );
    }

}

export default PostsPage;