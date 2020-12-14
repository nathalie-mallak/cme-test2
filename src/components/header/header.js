import React, { useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'

import { AppBar, InputBase, Toolbar, Select, Paper, InputLabel, FormControl, MenuItem, MenuList, IconButton, Menu, fade, makeStyles }from '@material-ui/core'
import MoreIcon from '@material-ui/icons/More'
import SearchIcon from '@material-ui/icons/Search'

const Header = () => {

	const classes = useStyles()
    
    const [type, setType] = useState('')
    const [inputValue, setInputValue] = useState('')

    const handleChange = e => {
        setType(e.target.value)
    }

	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
  
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
    
	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null)
	}

	const handleMobileMenuOpen = (e) => {
		setMobileMoreAnchorEl(e.currentTarget)
    }

    const searchValue = e => {
        setInputValue(e.target.value)
    }
    
    const searchHandler = e => {

    }

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<Paper>
				<MenuList className={classes.drpdown}>
					<MenuItem>
						<Link to='/' className='sublink'> Page 1 </Link>
					</MenuItem>
                    
                    <MenuItem>
						<Link to='/Page2' className='sublink'> Page 2 </Link>
					</MenuItem>
				</MenuList>
			</Paper>
		</Menu>
	)

	return (
		<div className={classes.root}>
			<AppBar position='static' className={classes.bar}>
				<Toolbar>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder='Search…'
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            value={inputValue}
                            onChange={searchValue}
                        />
                    </div>

                    <FormControl variant='outlined' className={classes.formControl}>
                        <InputLabel id='demo-simple-select-outlined-label' className={classes.types}> Types </InputLabel>
                        <Select
                            labelId='demo-simple-select-outlined-label'
                            id='demo-simple-select-outlined'
                            value={type}
                            onChange={handleChange}
                            label='Types'
                            className={classes.select}
                            >
                                <MenuItem className={classes.drpdown} value={1}> Lebanese </MenuItem>
                                <MenuItem className={classes.drpdown} value={2}> Italian </MenuItem>
                                <MenuItem className={classes.drpdown} value={3}> Japanese </MenuItem>
                        </Select>
                    </FormControl>

                    <button type='submit' className='buttonStyle' onClick={searchHandler}> Search </button>

					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>

                        <Link to ='/' className='link'> Page 1 </Link>

                        <Link to='/Page2' className='link'> Page 2 </Link>
					</div>

					<div className={classes.sectionMobile}>
						<IconButton
						aria-label='show more'
						aria-controls={mobileMenuId}
						aria-haspopup='true'
						onClick={handleMobileMenuOpen}
						color='inherit'
						>
						<MoreIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
		</div>
	)
}

export default Header

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},

	bar: {
		marginBottom: '20px',
		padding: '15px 30px',
		backgroundColor: 'rgb(89, 159, 224)'
	},

	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEs: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		border: '1px solid #ced4da',
		borderRadius: '5px',
		height: '50px',
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '65ch',
			'&:focus': {
				width: '70ch',
			},
		},
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
		  display: 'flex',
		},
		width: '30%',
		justifyContent: 'space-evenly',
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
		  display: 'none',
		},
	},
	drpdown: {
		backgroundColor: 'rgb(234, 214, 114)',
		border: '1px solid rgb(234, 214, 114)',
        color: 'white',
        '&:hover': {
            color: 'rgb(234, 214, 114)'

        }
    },
   
	icon: {
		fontSize: '30px'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
    select: {
        height: '50px',
        borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        border: '1px solid #CED4DA',
        color: 'white'
    },
    types: {
        color: 'white',
    }
  }))
  