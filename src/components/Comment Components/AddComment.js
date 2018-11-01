import React, {Component} from 'react';
import {connect} from 'react-redux';

class AddComment extends Component {
    constructor() {
        super();
        this.state = {
            titleInput: '',
            commentInput: '',
            isAdmin: false
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
        if(this.props.user.id){
        let newComment = {
            titleInput: this.state.titleInput,
            commentInput: this.state.commentInput
        }
        this.props.addComment(newComment, this.props.id)
      } else {
          alert('PLEASE LOGIN TO COMMENT')
      }
    }

    render() {
        console.log(this.props)
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

const mapStateToProps = state => {
    return{
        id: state.restaurantId,
        user: state.user
    }
}

export default connect(mapStateToProps)(AddComment)