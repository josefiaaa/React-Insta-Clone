import React from 'react';

import './Comments.css';



class AddComment extends React.Component {
    constructor (props){
        super(props);

        this.state = {
            text: ''
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }


    render() {
        return (
            <div className='commentForm'>
                <form>
                    <input
                    className='commentInput'
                    placeholder= 'Add a comment...'
                    >

                    </input>
                </form>

            </div>
        )
    }
}

export default AddComment;