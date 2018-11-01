import React, {Component} from 'react';
import {connect} from 'react-redux';
import {displayUser} from '../../dux/reducer';
import axios from 'axios';


class Account extends Component{

    async componentDidMount(){
        let res = await axios.get('/api/user-data');
         // invoke action creator
         this.props.displayUser(res.data)
     }

    render(){
        let{
            email,
            image
        } = this.props.user
        return(
            <div>
            <h1>username: {email}</h1>
            <img src={image} alt='' className='account-pic'/>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {displayUser})(Account)