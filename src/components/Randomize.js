import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectRestaurant} from '../dux/reducer';
import Spinner from './Spinner Component/Spinner';



export class Randomize extends Component{
    constructor(props){
        super(props)

        this.state = {
            restaurant: {},
            latitude: null,
            longitude: null
        }
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(data=>{
            axios.get('/api/get-restaurant', {
                params: {
                    latitude: data.coords.latitude,
                    longitude: data.coords.longitude,
                    name: this.props.match.params.type
                }
            }).then(res=>{
                this.setState({
                    restaurant: res.data,
                    latitude: data.coords.latitude,
                    longitude: data.coords.longitude
                })
            })

        })
    }


    render(){
        if (!this.state.restaurant.businesses){
            return (
                <Spinner />
            )
        }
        if (this.state.restaurant.businesses){
        var restaurants = this.state.restaurant.businesses.map(e => {
            return (
                <div key={e.id} className='restaurants'>
                <Link to='/restaurant'><button className='btn' onClick={() => this.props.selectRestaurant(e.coordinates.latitude, e.coordinates.longitude, e.name, e.image_url, e.location.display_address, e.id)}>{e.name}</button></Link>
                <h3>{e.name}</h3>
                <p>{e.location.display_address}</p>
                <img className='restaurant-img' src={e.image_url} alt=''/>
                </div>
            )
        })}
        return(
            <div className='randomize-display'>
                <h1>Welcome to the Restaurant Randomizer!</h1>
                <h2>
                    Here are the Top 20 restaurants around you! 
                </h2>   
                 <h2>   
                    Click the button named after the restaurant to get going!
                </h2>
                
                <div className='the-randomizer'>
                <div>{restaurants}</div>
                </div>
            </div>
        )
    }
}


export default connect(null, {selectRestaurant})(Randomize)

