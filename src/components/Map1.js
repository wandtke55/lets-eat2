import React, {Component} from 'react';
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import {connect} from 'react-redux';
import {selectRestaurant} from '../dux/reducer'

class Map1 extends Component{

    state = {
        showingInfoWindow: true,
        activeMarker: {},
        selectedPlace: this.props.restaurant
    }

    onMarkerClick = (props, marker, e) =>
    this.setState({
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

    render(){
        const {lat, lng, restaurant, address} = this.props
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
                    name={restaurant} />

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace}</h1>
                        <h4>{address}</h4>
                    </div>
                </InfoWindow>

                 </Map>
        )}
}

const mapStateToProps = state => {
    return {
        lat: state.latitude,
        lng: state.longitude,
        restaurant: state.restaurantName,
        address: state.restaurantAddress
    }
}

let {REACT_APP_GOOGLE_API} = process.env
// export default connect(mapStateToProps, {userLocation})

export default connect(mapStateToProps, {selectRestaurant})(GoogleApiWrapper({
    apiKey: (REACT_APP_GOOGLE_API),
})(Map1))