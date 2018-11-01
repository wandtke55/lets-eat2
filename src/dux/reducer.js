const initialState = {
    user: {},
    latitude: null,
    longitude: null,
    comments: [],
    restaurantName: '',
    restaurantImage: '',
    restaurantAddress: '',
    favorites: [],
    restaurantId: ''
}

const DISPLAY_USER = 'DISPLAY_USER'
const SELECT_RESTAURANT = 'SELECT_RESTAURANT'
const DISPLAY_FAVORITE = 'DISPLAY_FAVORITE'

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
            restaurantAddress: action.payload.address,
            restaurantId: action.payload.id
        })

        case DISPLAY_FAVORITE:
        return Object.assign({}, state, {favorites: action.payload})


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

export function selectRestaurant(latitude, longitude, name, image, address, id){
    return{
        type: SELECT_RESTAURANT,
        payload: {latitude, longitude, name, image, address, id}
    }
}

export function displayFavorite(favorites){
    return{
        type: DISPLAY_FAVORITE,
        payload: favorites
    }
}
