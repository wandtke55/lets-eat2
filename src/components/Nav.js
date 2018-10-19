import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Nav extends Component{
    render(){
        return(
            <div>
            <div className='nav-bar'>
            <div className='nav-home'><Link to='/'>Home</Link></div>    
            <div className='nav-contact'><Link to='/contact'>Contact</Link></div>
            <Link to='/about'>About</Link>
            </div>
            </div>
        )
    }
}

export default Nav