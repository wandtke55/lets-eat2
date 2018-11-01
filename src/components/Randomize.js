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
                <div key={e.id}>
                <Link to='/restaurant'><button onClick={() => this.props.selectRestaurant(e.coordinates.latitude, e.coordinates.longitude, e.name, e.image_url, e.location.display_address, e.id)}>{e.name}</button></Link>
                <p>{e.location.display_address}</p>
                <img className='restaurant-img' src={e.image_url} alt=''/>
                </div>
            )
        })}
        return(
            <div>
                <h1>Welcome to the Restaurant Randomizer!</h1>
                <p>
                    This is the randomize component where restaurants will hopefully be randomly generated.
                </p>
                
                <div className='the-randomizer'>
                <div>{restaurants}</div>
                </div>
            </div>
        )
    }
}


export default connect(null, {selectRestaurant})(Randomize)

