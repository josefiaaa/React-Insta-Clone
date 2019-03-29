import React from 'react';

import dummyData from'../../dummy-data';
import SearchHeader from '../SearchBar/SearchHeader';
import Post from './Post';

class PostsPage extends React.Component{

    constructor (props) {
        super(props);

        this.state = {
          profile : dummyData,
          commentText: '',
        };

    }

    handleChange = event => {
        event.preventDefault();
        this.setState({
            commentText: event.target.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const newComment = {
            id: Date.now(),
            usename: 'josefiaaa',
            text: this.state.commentText,
        };


        this.setState({
            comments: [...this.props.comments, newComment],
            commentText: '',
        });

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