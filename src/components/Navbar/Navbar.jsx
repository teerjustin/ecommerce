import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { classes } from 'istanbul-lib-coverage'

const Navbar = () => {
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inhereit">
                        <img src={} alt="Justin's Shop" height="25px" className={classes.image} />
                        Justin's Shop
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar