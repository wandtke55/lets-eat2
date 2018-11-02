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
            <div className='home-container'>
                <div className='intro'>
                <h1>Welcome to Rando-Dine! Your Randomized Dining Experience!</h1>
                <h4>
                    Here on Rando-Dine we help you decide where to eat and help you get there! Making a sometimes tough choice a snap! Select which type of food to eat and watch as the places come poaring in!
                </h4>
                <h4>LOGIN USING THE SIDE NAVIGATION TO YOUR LEFT TO GET STARTED! ONCE YOU'RE LOGGED IN YOUR FAVORITES WILL APPEAR ON THE HOME PAGE! IF YOU DON'T HAVE ANY START EATING AND ADDING FOR FUTURE OCCASIONS!</h4>
                <h1>Select Your Food Type To Get Started!</h1>
                </div>
                <div className='food-container'>
                    <Link to='/randomize/american' className='btn bouncy'><button>American</button></Link>
                    <Link to='/randomize/asian'className='btn bouncy one'><button>Asian</button></Link>
                    <Link to='/randomize/buffets'className='btn bouncy two'><button>Buffets</button></Link>
                    <Link to='/randomize/burgers'className='btn bouncy three'><button>Burgers</button></Link>
                    <Link to='/randomize/cafe'className='btn bouncy one'><button>Cafe</button></Link>
                    <Link to='/randomize/newcanadian'className='btn bouncy two'><button>Canadian</button></Link>
                    <Link to='/randomize/cheesesteaks'className='btn bouncy three'><button>Cheesesteaks</button></Link>
                    <Link to='/randomize/chinese'className='btn bouncy one'><button>Chinese</button></Link>
                    <Link to='/randomize/creperies'className='btn bouncy two'><button>Creperies</button></Link>
                    <Link to='/randomize/delis'className='btn bouncy three'><button>Delis</button></Link>
                    <Link to='/randomize/fast-food'className='btn bouncy one'><button>Fast Food</button></Link>
                    <Link to='/randomize/french'className='btn bouncy two'><button>French</button></Link>
                    <Link to='/randomize/gluten-free'className='btn bouncy three'><button>Gluten-Free</button></Link>
                    <Link to='/randomize/hawaiian'className='btn bouncy one'><button>Hawaiian</button></Link>
                    <Link to='/randomize/indian'className='btn bouncy two'><button>Indian</button></Link>
                    <Link to='/randomize/italian'className='btn bouncy three'><button>Italian</button></Link>
                    <Link to='/randomize/kebab'className='btn bouncy one'><button>Kebab</button></Link>
                    <Link to='/randomize/mexican'className='btn bouncy two'><button>Mexican</button></Link>
                    <Link to='/randomize/noodles'className='btn bouncy three'><button>Noodles</button></Link>
                    <Link to='/randomize/pita'className='btn bouncy one'><button>Pita</button></Link>
                    <Link to='/randomize/pizza'className='btn bouncy two'><button>Pizza</button></Link>
                    <Link to='/randomize/polynesian'className='btn bouncy three'><button>Polynesian</button></Link>
                    <Link to='/randomize/scandinavian'className='btn bouncy one'><button>Scandinavian</button></Link>
                    <Link to='/randomize/soup'className='btn bouncy two'><button>Soup</button></Link>
                    <Link to='/randomize/steak'className='btn bouncy three'><button>Steakhouses</button></Link>
                    <Link to='/randomize/sushi'className='btn bouncy one'><button>Sushi</button></Link>
                    <Link to='/randomize/vegan'className='btn bouncy two'><button>Vegan</button></Link>
                    <Link to='randomize/wraps'className='btn bouncy three'><button>Wraps</button></Link>
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