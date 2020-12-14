import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { GET_RESTAURANTS_FAILED, GET_RESTAURANTS_SUCCESS } from '../types'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/posts'

const getApi = () => {
    return axios
                .get('/')
                .then(res => res.data)
                .catch(err => {throw err})
}

function* getRestaurants(action) {
    try {
        const restaurants = yield call(getApi)
        yield put({ type: GET_RESTAURANTS_SUCCESS, restaurants: restaurants })
    }

    catch (e) {
        yield put({ type: GET_RESTAURANTS_FAILED, message: e.message })
    }
}

function* RestaurantSaga() {
    yield takeEvery('GET_RESTAURANTS_REQUESTED', getRestaurants)
}

export default RestaurantSaga