import React, {Component} from 'react';

class Login extends Component{

    componentDidMount(){

    }

    login(){
        let {REACT_APP_DOMAIN, REACT_APP_CLIENT_ID} = process.env;

        let uri = `${encodeURIComponent(window.location.origin)}/auth/callback`

        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri${uri}&response_type=code`
    }

    render(){
        return(
            <div className='login'>
            <p onClick={this.login}>Login</p>
            </div>
        )
    }
}

export default Login