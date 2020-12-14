import React from 'react'
import { useSelector } from 'react-redux'
import Skeleton from '@material-ui/lab/Skeleton'
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
    return <MuiAlert elevation={6} variant='filled' {...props} />
}

const Loading = () => {

    const restaurants = useSelector(state => state.restaurants.restaurants)
    const loading = useSelector(state => state.restaurants.loading)
    const error = useSelector(state => state.restaurants.error)

    return (
        <>
            {restaurants.loading && <div>
                    <Skeleton />
                    <Skeleton animation={false} />
                    <Skeleton animation='wave' />
                </div>
            }
            {restaurants.length === 0 && <p> no restaurants available </p>}
            
            {error && !loading && <Alert severity='error'> {error} </Alert>
}
        </>
    )
}

export default Loading
