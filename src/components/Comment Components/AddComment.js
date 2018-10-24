import React, {Component} from 'react';

class AddComment extends Component {
    constructor() {
        super();
        this.state = {
            titleInput: '',
            commentInput: ''
        }
    }

    handleTextAreaChange = (value) => {
        this.setState({
            commentInput: value
        })
    }

    handleTitleInputChange = (value) => {
        this.setState({
            titleInput: value
        })
    }

    addNewComment = () => {
        let newComment = {
            titleInput: this.state.titleInput,
            commentInput: this.state.commentInput
        }
        this.props.addComment(newComment)
    }

    render() {
        return (
            <div className='addcomment-container'>
                <div>
                <input type='text' onChange={ (e) => this.handleTitleInputChange(e.target.value) }/>
                <button onClick={this.addNewComment}>Add Comment</button>
                </div>
                <textarea onChange={ (e) => this.handleTextAreaChange(e.target.value)} className='addcomment-textarea'/>
            </div>
        )
    }
}


export default AddComment