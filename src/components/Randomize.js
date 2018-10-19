import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';



export class Randomize extends Component{
    constructor(props){
        super(props)

        this.state = {
            restaurantName: 'Dummy State Data'
        }
    }

    componentDidMount(){
        axios.get()
    }

    getRestaurant(){
        this.setState({})
    }

    render(){
        return(
            <div>
                <h1>Welcome to the Restaurant Randomizer!</h1>
                <p>
                    This is the randomize component where restaurants will hopefully be randomly generated.
                </p>
                
                <div className='the-randomizer'>
                <h1>{this.state.restaurantName}</h1>
                <h1>This will hopefully become a randomized restaurant wheel or generator</h1>
                </div>
                <div className='user-favorites-list'>
                    <p>
                    This will hopefully become the list of the users favorite restaurants that have been generated
                    </p>
                </div>
                <button>Generate A Restaurant</button>
                <Link to='/restaurant'><button restaurantName={this.state.restaurantName}>Select Restaurant</button></Link>
                <div className='restaurant-name'>
                </div>
            </div>
        )
    }
}

export default Randomize

