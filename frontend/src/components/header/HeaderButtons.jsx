import { Box, Button, makeStyles,Typography, Badge} from '@material-ui/core'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import MailIcon from "@material-ui/icons/Mail"

import React from 'react'

const useStyle = makeStyles(theme => ({
    login: {
        background: "#FFFFFF",
        color: "#2874f0",
        textTransform: "none",
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        boxShadow: "none"
    },
    wrapper: {
        margin: "0 5% 0 auto",
        display: "flex",
        "& > *": {
            marginRight: 50,
            alignItems: "center"
        }
    },
    container: {
        display: "flex"
    }
}))
const HeaderButtons = () => {

    const classes = useStyle({

    })
    return (
        <Box className={classes.wrapper}>
            <Button variant="contained"className={classes.login}>Login</Button>
            <Typography style={{marginTop: 5}}>More</Typography>
            <Box className={classes.container}>
                <Badge badgeContent={2} color="secondary">
                   <ShoppingCartIcon />
                </Badge>
                <Typography style={{marginLeft: 10}}>
                    Cart
                </Typography>
            </Box>
        </Box>
    )
}

export default HeaderButtons
