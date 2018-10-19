import React, {Component} from 'react';
import {connect} from 'react-redux';
import {displayUser} from '../../dux/reducer';
import axios from 'axios';


class Account extends Component{

    async componentDidMount(){
        let res = await axios.get('/api/user-data');
         // invoke action creator
         console.log(res.data)
         this.props.displayUser(res.data[0])
     }

    render(){
        let{
            email,
            image
        } = this.props.user
        return(
            <div>
            <p>username: {email}</p>
            <img src={image} alt=''/>
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