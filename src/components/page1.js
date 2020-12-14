import React, { useState, useEffect } from 'react'
import Cards from './cards/cards'
import { useDispatch, useSelector } from 'react-redux'
import getRestaurants from '../redux/actions/restaurantAction'
import { Grid } from '@material-ui/core'
import Header from './header/header'
import Loading from './loading'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { makeStyles } from '@material-ui/core/styles'

import { MemoryRouter, Route } from 'react-router'
import { Link } from 'react-router-dom'
import Pagination from '@material-ui/lab/Pagination'
import PaginationItem from '@material-ui/lab/PaginationItem'

const Page1 = props => {

    const classes = useStyles()

    const [currentPage, setCuurentPage] = useState(1)
    const [usersPerPage, setUsersPerPage] = useState(5)
    const dispatch = useDispatch()

    const restaurants = useSelector(state => state.restaurants.restaurants)
    // const loading = useSelector(state => state.restaurants.loading)
    // const error = useSelector(state => state.restaurants.error)

    useEffect(() => {
        dispatch(getRestaurants())
    }, [])

    // const indexOfLastUser = currentPage * usersPerPage
    // const indexOfFirstUser = indexOfLastUser - usersPerPage
    // const user = users.slice(indexOfFirstUser, indexOfLastUser)

    const [open, setOpen] = useState(false)

    const openModal = () => {
      setOpen(true)
    }
  
    const handleClose = () => {
      setOpen(false)
    }  

    return (
        <>
            <Header />
            {/* {restaurants.loading && <p>Loading...</p>} */}

            <Loading />

            <Grid direction= 'column' spacing={4} >
          <Grid Item container justify='center'>
             <Grid Item xs={0} sm={10} md={0}></Grid>
             <Grid Item xs={12} sm={12} md={10}></Grid>
                        {restaurants.length > 0 && restaurants.map((restaurant) => {
                            return <Grid direction= 'column' spacing={4} >
                                        <Grid Item container justify='flex-end'>
                                            <Grid Item xs={12} sm={10} md={10}>
                                               <Cards restaurants={restaurant} key={restaurant.id} onClick={openModal} />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                        })}
                </Grid>
         <Grid Item xs={0} sm={2} md={0}></Grid>
       </Grid>

       <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{props.restaurants.name}</h2>
            <p id="transition-modal-description">{props.restaurants.address}</p>
            <p id="transition-modal-description">{props.restaurants.website}</p>
          </div>
        </Fade>
      </Modal>

            {/* {restaurants.length === 0 && <p> no restaurants available </p>}
            {error && !loading && <p>{error}</p>} */}

            <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
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
    </MemoryRouter>
        </>
    )
}

export default Page1

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));