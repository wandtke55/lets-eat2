const initialState = {
    user: {},
    latitude: null,
    longitude: null,
    comments: [],
    restaurantName: '',
    restaurantImage: '',
    restaurantAddress: ''
}

const DISPLAY_USER = 'DISPLAY_USER'
const SELECT_RESTAURANT = 'SELECT_RESTAURANT'

export default function reducer(state = initialState, action){
    switch(action.type){

        case DISPLAY_USER:
        return Object.assign({}, state, {user: action.payload})

        case SELECT_RESTAURANT:
        return Object.assign({}, state, {
            latitude: action.payload.latitude,
            longitude: action.payload.longitude,
            restaurantName: action.payload.name,
            restaurantImage: action.payload.image,
            restaurantAddress: action.payload.address
        })


        default:
        return state;
    }
}

export function displayUser(data){
    return{
        type: DISPLAY_USER,
        payload: data
    }
}

export function selectRestaurant(latitude, longitude, name, image, address){
    return{
        type: SELECT_RESTAURANT,
        payload: {latitude, longitude, name, image, address}
    }
}
