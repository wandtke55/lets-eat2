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
        console.log(newComment)
    }

    render() {
        return (
            <div className='addcomment-container'>
                <input type='text' onChange={ (e) => this.handleTitleInputChange(e.target.value) }/>
                <textarea onChange={ (e) => this.handleTextAreaChange(e.target.value)} className='addcomment-textarea'/>
                <button onClick={this.addNewComment}>Add Comment</button>
            </div>
        )
    }
}


export default AddComment