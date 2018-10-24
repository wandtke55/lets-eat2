import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <div>
                <div className='intro'>
                <h1>Welcome to Lets-Eat! Your helper for finding GOOD places to eat!</h1>
                <p>
                    Here on Lets-Eat we help you decide where to eat and help you get there! Making for a simple and easy way to decide where to eat. Select which type of food to eat and watch as the places come poaring in!
                </p>
                </div>
                <h1>Food Types</h1>
                <div className='food-container'>
                    <Link to='/randomize/american'><button>American</button></Link>
                    <Link to='/randomize/asian'><button>Asian</button></Link>
                    <Link to='/randomize/buffets'><button>Buffets</button></Link>
                    <Link to='/randomize/burgers'><button>Burgers</button></Link>
                    <Link to='/randomize/cafe'><button>Cafe</button></Link>
                    <Link to='/randomize/newcanadian'><button>Canadian</button></Link>
                    <Link to='/randomize/cheesesteaks'><button>Cheesesteaks</button></Link>
                    <Link to='/randomize/chinese'><button>Chinese</button></Link>
                    <Link to='/randomize/comfortfood'><button>Comfort Food</button></Link>
                    <Link to='/randomize/creperies'><button>Creperies</button></Link>
                    <Link to='/randomize/delis'><button>Delis</button></Link>
                    <Link to='/randomize/fast-food'><button>Fast Food</button></Link>
                    <Link to='/randomize/french'><button>French</button></Link>
                    <Link to='/randomize/gluten-free'><button>Gluten-Free</button></Link>
                    <Link to='/randomize/hawaiian'><button>Hawaiian</button></Link>
                    <Link to='/randomize/indian'><button>Indian</button></Link>
                    <Link to='/randomize/italian'><button>Italian</button></Link>
                    <Link to='/randomize/kebab'><button>Kebab</button></Link>
                    <Link to='/randomize/mexican'><button>Mexican</button></Link>
                    <Link to='/randomize/noodles'><button>Noodles</button></Link>
                    <Link to='/randomize/pita'><button>Pita</button></Link>
                    <Link to='/randomize/pizza'><button>Pizza</button></Link>
                    <Link to='/randomize/polynesian'><button>Polynesian</button></Link>
                    <Link to='/randomize/steak'><button>Steakhouses</button></Link>
                    <Link to='/randomize/vegan'><button>Vegan</button></Link>
                    <Link to='randomize/wraps'><button>Wraps</button></Link>
                </div>
            </div>
        )
    }
}

export default Home