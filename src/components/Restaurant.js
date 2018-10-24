import React, {Component} from 'react';
import './Restaurant.css';
import AddComment from './Comment Components/AddComment';
import CommentContainer from './Comment Components/CommentContainer';
import axios from 'axios'
import Map1 from './Map1';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectRestaurant} from '../dux/reducer';


class Restaurant extends Component{
    constructor(props){
        super(props);

        this.state = {
            comments: []
        }
    }

    addComment = (comment) => {
        axios.post('/api/comment', {comment})
        .then( comments => console.log(comments) || this.setState({comments: comments.data}))
      }

    // myRestaurant(restaurant){
    //     this.props.displayRestaurant(restaurant)
    // }

    render(){
        let {
            restaurant,
            image,
            address
        } = this.props
        console.log(this.props)
        return(
            <div>
                    <p>{restaurant}</p>
                    <img className='restaurant-img' src={image} alt=''/>
                    <p>{address}</p>
                <div>
                 <Map1 />
                </div>
                <div className='restaurant-addons'>
                <button>Menu to display here</button>
                <button>Add To Favorites List</button>
                <Link to=''><button>Go To Restaurant</button></Link>
                <h1>Comments About This Restaurant</h1>
                <AddComment addComment={this.addComment}/>
                <CommentContainer comments={this.state.comments}/>
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
        address: state.restaurantAddress
    }
}


export default connect(mapStateToProps, {selectRestaurant})(Restaurant)