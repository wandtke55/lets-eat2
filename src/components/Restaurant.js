import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './Restaurant.css';
import AddComment from './Comment Components/AddComment';
import CommentContainer from './Comment Components/CommentContainer';
import axios from 'axios'


class Restaurant extends Component{
    constructor(props){
        super(props);

        this.state = {
            comments: []
        }
    }

    addComment = (comment) => {
        console.log(comment)
        axios.post('/api/comment', {comment})
        .then( comments => console.log(comments) || this.setState({comments: comments.data}))
      }

    addToFavoritesList(){
        
    }

    render(){
        const style = {
            width: '70%',
            height: '50%',
            marginTop: '30%',
            marginLeft: '15%'
        }
        return(
            <div>
                <div>
                    <h1> This is where the name of the Randomized Restaurant is to be displayed.
                    </h1>
                    <Map
                google={this.props.google}
                style={style}
                initialCenter={{
                lat: 40.2338,
                lng: -111.6585
                }}
                 zoom={15}
                 onClick={this.onMapClicked}
                 >

                <Marker onClick={this.onMarkerClick}
                 name={'Current location'} />

                 <InfoWindow onClose={this.onInfoWindowClose}>
                    {/* <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div> */}
                 </InfoWindow>
                 </Map>
                </div>
                <div className='restaurant-addons'>
                <button>Menu to display here</button>
                <button>Add To Favorites List</button>
                <button>Go To Restaurant</button>
                <h1>Comments About This Restaurant</h1>
                <AddComment addComment={this.addComment}/>
                <CommentContainer comments={this.state.comments}/>
                </div>
            </div>
        )
    }
}

let {REACT_APP_GOOGLE_API} = process.env
export default GoogleApiWrapper({
    apiKey: (REACT_APP_GOOGLE_API)
})(Restaurant)