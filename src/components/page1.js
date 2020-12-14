import React, { useState, useEffect } from 'react'
import Cards from './cards/cards'
import { useDispatch, useSelector } from 'react-redux'
import getRestaurants from '../redux/actions/restaurantAction'
import { Grid } from '@material-ui/core'
import Header from './header/header'

import { MemoryRouter, Route } from 'react-router'
import { Link } from 'react-router-dom'
import Pagination from '@material-ui/lab/Pagination'
import PaginationItem from '@material-ui/lab/PaginationItem'

const Page1 = () => {

    const [currentPage, setCuurentPage] = useState(1)
    const [usersPerPage, setUsersPerPage] = useState(5)
    const dispatch = useDispatch()

    const restaurants = useSelector(state => state.restaurants.restaurants)
    const loading = useSelector(state => state.restaurants.loading)
    const error = useSelector(state => state.restaurants.error)

    useEffect(() => {
        dispatch(getRestaurants())
    }, [])

    const indexOfLastUser = currentPage * usersPerPage
    const indexOfFirstUser = indexOfLastUser - usersPerPage
    // const user = users.slice(indexOfFirstUser, indexOfLastUser)

    return (
        <>
            <Header />
            {restaurants.loading && <p>Loading...</p>}

            <Grid direction= 'column' spacing={4} >
			    <Grid Item container justify='center'>
 			    	<Grid Item xs={0} sm={10} md={0}></Grid>
 				    <Grid Item xs={12} sm={12} md={10}></Grid>
                        {restaurants.length > 0 && restaurants.map((restaurant) => {
                            return <Grid direction= 'column' spacing={4} >
                                        <Grid Item container justify='flex-end'>
                                            <Grid Item xs={12} sm={10} md={10}>
                                               <Cards restaurants={restaurant} key={restaurant.id} />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                        })}
                </Grid>
 				<Grid Item xs={0} sm={2} md={0}></Grid>
 			</Grid>

            {restaurants.length === 0 && <p> no restaurants available </p>}
            {error && !loading && <p>{error}</p>}

            {/* <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
      <Route>
        {({ location }) => {
          const query = new URLSearchParams(location.search);
          const page = parseInt(query.get('page') || '1', 10);
          return (
            <Pagination
              page={page}
              count={10}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/inbox${item.page === 1 ? '' : `?page=${item.page}`}`}
                  {...item}
                />
              )}
            />
          );
        }}
      </Route>
    </MemoryRouter> */}
        </>
    )
}

export default Page1
