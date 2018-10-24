import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import {connect} from 'react-redux';
import {selectRestaurant} from '../dux/reducer'

class Map1 extends Component{

    render(){
        const {lat, lng} = this.props
        const style = {
            width: '70%',
            height: '50%',
            marginTop: '5%',
            marginLeft: '15%'
        }
        return(
        <Map
                google={this.props.google}
                style={style}
                initialCenter={{
                lat: lat ? lat : 40.2338,
                lng: lng ? lng : -111.6585
                }}
                 zoom={15}
                 onClick={this.onMapClicked}
                 >

                <Marker onClick={this.onMarkerClick}
                 name={'Current location'} />

                 
                 </Map>
        )}
}

const mapStateToProps = state => {
    return {
        lat: state.latitude,
        lng: state.longitude
    }
}

let {REACT_APP_GOOGLE_API} = process.env
// export default connect(mapStateToProps, {userLocation})

export default connect(mapStateToProps, {selectRestaurant})(GoogleApiWrapper({
    apiKey: (REACT_APP_GOOGLE_API),
})(Map1))