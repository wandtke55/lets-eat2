import React, {Component} from 'react';
import AddComment from './Comment Components/AddComment';
import CommentContainer from './Comment Components/CommentContainer';
import axios from 'axios'
import Map1 from './Map1';
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectRestaurant} from '../dux/reducer';


class Restaurant extends Component{
    constructor(props){
        super(props);

        this.state = {
            comments: [],
            favorites: []
        }
        
    }

    componentDidMount(){
        axios.get(`/api/comments/${this.props.id}`)
        .then(res => this.setState({
            comments: res.data
        }))
    }

    addComment = (comment) => {
        axios.post('/api/comment', {comment})
        .then( comments => console.log(comments) || this.setState({comments: comments.data}))
      }

    myRestaurant(restaurant){
        this.props.displayRestaurant(restaurant)
    }

    addFavorite = (favorite) => {
        axios.post('/api/favorites', {favorite})
        .then( favorite => console.log(favorite) || this.setState({favorites: favorite.data}))
      }

      handleDeleteComment = (id) => {
        axios.delete(`/api/comment/${id}`).then(res => this.setState({
            comments: res.data
        }))
    }

      submitEdit = (id, titleInput, commentInput) => {
        axios.put(`/api/comment/${id}`, {titleInput, commentInput})
        .then(res => this.setState({
            comments: res.data
        }))
    }

    render(){
        let {
            restaurant,
            image,
            address,
        } = this.props
        console.log(this.props)
        return(
            <div>
                    <p>{restaurant}</p>
                    <img className='restaurant-img' src={image} alt=''/>
                <div className='map-resize'>
                 <Map1 />
                </div>
                <div className='restaurant-addons'>
                <button onClick={this.addFavorite}>Add To Favorites List</button>
                <a href={'https://www.google.com/maps/place/'+ restaurant + '%20' + address}><button>Go To Restaurant</button></a>
                <h1>Comments About This Restaurant</h1>
                <AddComment addComment={this.addComment}/>
                <CommentContainer handleDeleteComment={this.handleDeleteComment} submitEdit= {this.submitEdit} comments={this.state.comments}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return{
        restaurant: state.restaurantName,
        image: state.restaurantImage,
        address: state.restaurantAddress,
    }
}


export default connect(mapStateToProps, {selectRestaurant})(Restaurant)