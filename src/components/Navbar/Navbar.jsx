import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { classes } from 'istanbul-lib-coverage'

import logo from '../../assets/market.png'
import useStyles from './styles'

const Navbar = ({totalItems}) => {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inhereit">
                        <img src={logo} alt="Justin's Shop" height="25px" className={classes.image} />
                        Justin's Shop
                    </Typography>
                    <div className={classes.grow}/>

                    <div className={classes.button}>
                        <IconButton aria-label="Show Cart Items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar