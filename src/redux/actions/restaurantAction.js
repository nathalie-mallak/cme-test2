import restaurants from '../reducers/restaurantReducer'
import { GET_RESTAURANTS_REQUESTED } from '../types'

const getRestaurants = (restaurants) => {
    return {
        type: GET_RESTAURANTS_REQUESTED,
        payload: restaurants
    }
}

export default getRestaurants