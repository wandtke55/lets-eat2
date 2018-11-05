import React, {Component} from 'react';
import AddComment from './Comment Components/AddComment';
import CommentContainer from './Comment Components/CommentContainer';
import axios from 'axios'
import Map1 from './Map1';
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class Restaurant extends Component{
    constructor(props){
        super(props);

        this.state = {
            comments: [],
            favorites: ''
        }
        
    }

    componentDidMount(){
        axios.get(`/api/comment/${this.props.id}`)
        .then(res => this.setState({
            comments: res.data
        }))
    }

    addComment = (comment, restaurantId) => {
        axios.post('/api/comment', {comment, restaurantId})
        .then( comments => console.log(comments) || this.setState({comments: comments.data}))
      }

    myRestaurant(restaurant){
        this.props.displayRestaurant(restaurant)
    }

    addFavorite = (favorite) => {
        axios.post('/api/favorites', {favorite})
        .then( favorites => console.log(favorites) || this.setState({favorites: favorites.data}))
      }

      handleDeleteComment = (id) => {
        axios.delete(`/api/comment/${id}/${this.props.id}`).then(res => this.setState({
            comments: res.data
        }))
    }

      submitEdit = (id, titleInput, commentInput, restaurantId) => {
        axios.put(`/api/comment/${id}/${restaurantId}`, {titleInput, commentInput})
        .then(res => this.setState({
            comments: res.data
        }))
    }

    render(){
        let {
            restaurant,
            image,
            address,
            latitude,
            longitude
        } = this.props
        console.log(this.props)
        console.log(this.state)
        return(
            <div>
                    <h3 className='restaurants'>{restaurant}</h3>
                    <img className='restaurant-img' src={image} alt=''/>
                <div className='map-resize'>
                 <Map1 />
                </div>
                <div className='restaurant-addons'>
                <div>
                <button onClick={() => this.addFavorite(restaurant)} id = 'favorites-btn'>Add To Favorites List</button>
                <a href={'https://www.google.com/maps/place/'+ restaurant + '%20' + address + latitude + longitude}><button id = 'favorites-btn'>Go To Restaurant</button></a>
                </div>
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
        latitude: state.latitude,
        longitude: state.longitude,
        favorites: state.favorites,
        id: state.restaurantId
    }
}


export default connect(mapStateToProps)(Restaurant)