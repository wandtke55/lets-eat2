import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <div>
                <h1>Description</h1>
                <p>
                    This will be a description about the website and what you need to do in order to get your randomized restaurant.
                </p>
                <h1>Food Types</h1>
                <div className='food-container'>
                    <button>Italian</button>
                    <button>Asian</button>
                    <button>Mexican</button>
                    <button>American BBQ</button>
                    <button>Indian</button>
                    <button>Cafe</button>
                    <button>Fast Food</button>
                </div>
                <Link to='/randomize'><button>Get Started</button></Link>
            </div>
        )
    }
}

export default Home