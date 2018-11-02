import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Favorites from '../UserFavs Components/Favorites';
import {connect} from 'react-redux';
import axios from 'axios';
import {displayUser} from '../../dux/reducer';


class Home extends Component{

    async componentDidMount(){
        let res = await axios.get('/api/user-data');
         // invoke action creator
         this.props.displayUser(res.data)
     }

    render(){
        let{
            email
        } = this.props.user
        console.log(this.props)
        return(
            <div>
                <div className='intro'>
                <h1>Welcome to Rando-Dine! Your Randomized Dining Experience!</h1>
                <h4>
                    Here on Rando-Dine we help you decide where to eat and help you get there! Making a sometimes tough choice a snap! Select which type of food to eat and watch as the places come poaring in!
                </h4>
                <h4>LOGIN USING THE SIDE NAVIGATION TO YOUR LEFT TO GET STARTED! ONCE YOU'RE LOGGED IN YOUR FAVORITES WILL APPEAR ON THE HOME PAGE! IF YOU DON'T HAVE ANY START EATING AND ADDING FOR FUTURE OCCASIONS!</h4>
                <h1>Select Your Food Type To Get Started!</h1>
                </div>
                <div className='food-container'>
                    <Link to='/randomize/american' className='btn'><button>American</button></Link>
                    <Link to='/randomize/asian'className='btn'><button>Asian</button></Link>
                    <Link to='/randomize/buffets'className='btn'><button>Buffets</button></Link>
                    <Link to='/randomize/burgers'className='btn'><button>Burgers</button></Link>
                    <Link to='/randomize/cafe'className='btn'><button>Cafe</button></Link>
                    <Link to='/randomize/newcanadian'className='btn'><button>Canadian</button></Link>
                    <Link to='/randomize/cheesesteaks'className='btn'><button>Cheesesteaks</button></Link>
                    <Link to='/randomize/chinese'className='btn'><button>Chinese</button></Link>
                    <Link to='/randomize/creperies'className='btn'><button>Creperies</button></Link>
                    <Link to='/randomize/delis'className='btn'><button>Delis</button></Link>
                    <Link to='/randomize/fast-food'className='btn'><button>Fast Food</button></Link>
                    <Link to='/randomize/french'className='btn'><button>French</button></Link>
                    <Link to='/randomize/gluten-free'className='btn'><button>Gluten-Free</button></Link>
                    <Link to='/randomize/hawaiian'className='btn'><button>Hawaiian</button></Link>
                    <Link to='/randomize/indian'className='btn'><button>Indian</button></Link>
                    <Link to='/randomize/italian'className='btn'><button>Italian</button></Link>
                    <Link to='/randomize/kebab'className='btn'><button>Kebab</button></Link>
                    <Link to='/randomize/mexican'className='btn'><button>Mexican</button></Link>
                    <Link to='/randomize/noodles'className='btn'><button>Noodles</button></Link>
                    <Link to='/randomize/pita'className='btn'><button>Pita</button></Link>
                    <Link to='/randomize/pizza'className='btn'><button>Pizza</button></Link>
                    <Link to='/randomize/polynesian'className='btn'><button>Polynesian</button></Link>
                    <Link to='/randomize/scandinavian'className='btn'><button>Scandinavian</button></Link>
                    <Link to='/randomize/soup'className='btn'><button>Soup</button></Link>
                    <Link to='/randomize/steak'className='btn'><button>Steakhouses</button></Link>
                    <Link to='/randomize/sushi'className='btn'><button>Sushi</button></Link>
                    <Link to='/randomize/vegan'className='btn'><button>Vegan</button></Link>
                    <Link to='randomize/wraps'className='btn'><button>Wraps</button></Link>
                </div>
                <div>
                    <h3 className='ufav'>{email} FAVORITES</h3>
                    <div >
                        
                        <div>
                        {this.props.user.id ? <Favorites  user_id={ this.props.user.id}/> : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, {displayUser})(Home)