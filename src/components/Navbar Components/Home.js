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
                <p>LOGIN USING THE SIDE NAVIGATION TO YOUR LEFT TO GET STARTED! ONCE YOU'RE LOGGED IN YOUR FAVORITES WILL APPEAR ON THE HOME PAGE! IF YOU DON'T HAVE ANY START EATING AND ADDING FOR FUTURE OCCASIONS!</p>
                </div>
                <h1>Select Your Food Type To Get Started!</h1>
                <div className='food-container'>
                    <Link to='/randomize/american'><button>American</button></Link>
                    <Link to='/randomize/asian'><button>Asian</button></Link>
                    <Link to='/randomize/buffets'><button>Buffets</button></Link>
                    <Link to='/randomize/burgers'><button>Burgers</button></Link>
                    <Link to='/randomize/cafe'><button>Cafe</button></Link>
                    <Link to='/randomize/newcanadian'><button>Canadian</button></Link>
                    <Link to='/randomize/cheesesteaks'><button>Cheesesteaks</button></Link>
                    <Link to='/randomize/chinese'><button>Chinese</button></Link>
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
                    <Link to='/randomize/scandinavian'><button>Scandinavian</button></Link>
                    <Link to='/randomize/soup'><button>Soup</button></Link>
                    <Link to='/randomize/steak'><button>Steakhouses</button></Link>
                    <Link to='/randomize/sushi'><button>Sushi</button></Link>
                    <Link to='/randomize/vegan'><button>Vegan</button></Link>
                    <Link to='randomize/wraps'><button>Wraps</button></Link>
                </div>
                <div>
                    <h1>{email} FAVORITES</h1>
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