const initialState = {
    user: {}
}

const DISPLAY_USER = 'DISPLAY_USER'

export default function reducer(state = initialState, action){
    switch(action.type){

        case DISPLAY_USER:
        return Object.assign({}, state, {user: action.payload})

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