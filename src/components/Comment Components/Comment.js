import React, {Component} from 'react';
import axios from 'axios';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            titleInput: '',
            commentInput: this.props.comment.comment,
            comments: []
        }
    }

    toggleEditing = () => {
        this.setState({
            editing: !this.state.editing
        })
    }

    handleTitleInput = (e) => {
        this.setState({
            titleInput: e.target.value
        })
    }

    handleCommentInput = (e) => {
        this.setState({
            commentInput: e.target.value
        })
    }

    handleDeleteComment(id){
        this.props.handleDeleteComment(id)
    }

    submitEdit(id, titleInput, commentInput){
        this.props.submitEdit(id, titleInput, commentInput)
    }

  
    render() {
        console.log(this.state.comments)
        console.log(this.props.comment)
    return (
      <div className="commentcontainer-comment" key={this.props.comment.id}>
      { this.state.editing
        ?
        (<div><h4>{this.props.comment.comment_title}</h4>
        <input 
          value={this.state.commentInput} 
          onChange={this.handleCommentInput}/></div>)
        : <h4>{this.props.comment.comment_title}</h4>
        }

        { this.state.editing }
        

        {/* <input 
            value={this.state.commentInput} 
            onChange={this.handleCommentInput}/> */}
        <p>{this.props.comment.comment}</p>
        <button onClick={()=>this.submitEdit(this.props.comment.id, this.props.comment.comment_title, this.state.commentInput)}>Submit</button>
        <button onClick={this.toggleEditing}>Edit</button>
        <button onClick={()=> this.handleDeleteComment(this.props.comment.id)}>Delete</button>
        <p className="commentcontainer-date">{this.props.comment.date}</p>
      </div>
    );
  }
}


export default Comment