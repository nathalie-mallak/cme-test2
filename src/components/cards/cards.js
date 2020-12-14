import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, IconButton } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'
import restoImage from '../../image/restaurant-image.jpg'

const RestCard = props => {

  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={restoImage}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
          {props.restaurant.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton>
         <CheckIcon />     
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default RestCard

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  })