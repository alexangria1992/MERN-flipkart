import React from 'react'
import NavBar from "./NavBar"
import Banner from "./Banner"
import {Box, makeStyles} from "@material-ui/core"

const useStyle = makeStyles(theme => ({
    component: {
        padding: 10,
        background: "#F2F2F2"
    }
}))
const Home = () => {
    const classes = useStyle()
    return (
        <div>
            <NavBar />
            <Box className={classes.component}>
              <Banner />
            </Box>
       
        </div>
           
    )
}

export default Home
