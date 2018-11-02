import React, {Component} from 'react';
import {connect} from 'react-redux';
import DeleteBtn from '../DeleteBtn';

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

    submitEdit(id, titleInput, commentInput, restaurantId){
        this.props.submitEdit(id, titleInput, commentInput, restaurantId)
    }

    checkUserOrAdmin(){
        let {comment: {user_id: commentUser}, user: {id, isadmin}} = this.props
        if(commentUser === id || isadmin){
            return true
        } 
        return false
    }

  
    render() {
        console.log(this.state.comments)
        console.log(this.props.comment)
        const allowEdit = this.checkUserOrAdmin()
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
        {allowEdit && <div>
        <button onClick={()=>this.submitEdit(this.props.comment.id, this.props.comment.comment_title, this.state.commentInput, this.props.comment.restaurant_id)}>Submit</button>
        <button onClick={this.toggleEditing}>Edit</button>
        <DeleteBtn times={2} dialog={['Delete', 'Are You Sure?']} action={()=> this.handleDeleteComment(this.props.comment.id)}/>
        </div>}
      </div>
    );
  }
}

const mapStateToProps = state => {
    return{
        user: state.user,
    }
}


export default connect(mapStateToProps)(Comment)