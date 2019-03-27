import React from 'react';

import './Comments.css';



class AddComment extends React.Component {
    constructor (props){
        super(props);

        this.state = {
            comments: [],
            commentText: '',
        };

        
    }

    componentDidMount() {
        this.setState({
            comments: this.props.comments,
        })
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
            text: this.state.commentText.toString(),
        }; 
        
        const com = this.props.comments.slice();

        com.push(newComment);

        this.setState({ 
            com, newComment: '',
        });

        this.setState ({
            commentText: '',
        })
        
    }

    
    render() {
        
        return (
            <div className='commentForm'>
                <form onSubmit={this.handleSubmit}>
                    <input
                    className='commentInput'
                    type='text'
                    value={this.state.commments}
                    placeholder= 'Add a comment...'
                    onChange={this.handleChange}
                    >

                    </input>
                </form>

            </div>
        )
    }
}

export default AddComment;