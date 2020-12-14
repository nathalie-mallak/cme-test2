import { GET_RESTAURANTS_FAILED, GET_RESTAURANTS_REQUESTED, GET_RESTAURANTS_SUCCESS } from '../types'

const initialState = {
    restaurants: [], 
    loading: false,
    error: null
}

export default function restaurants(state = initialState, action) {

    switch(action.type) {
        case GET_RESTAURANTS_REQUESTED:
            return {
                ...state,
                loading: true
            }

        case GET_RESTAURANTS_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurants: action.restaurants
            }
        
        case GET_RESTAURANTS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            }

        default:
            return state
    }
}