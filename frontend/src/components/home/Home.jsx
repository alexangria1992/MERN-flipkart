import React from 'react'
import NavBar from "./NavBar"
import Banner from "./Banner"
import Slide from "./Slide"
import {Box, makeStyles} from "@material-ui/core"
import MidSection from "./MidSection"

const useStyle = makeStyles(theme => ({
    component: {
        padding: 10,
        background: "#F2F2F2"
    },
    rightWrapper: {
        background: "#FFFFFF",
        padding: 5,
        margin: "12px 0 0 10px",
        width: "17%"
    }
}))
const Home = () => {
    const classes = useStyle()
    const addURL = "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70"
    return (
        <div>
            <NavBar />
            <Box className={classes.component}>
              <Banner />
              <Box style={{display: "flex"}}>
                  <Box style={{width: "83%"}}>
                      <Slide 
                        timer = {true}
                        title = "Deal of the Day"
                         />
                  </Box>
                   <Box className={classes.rightWrapper}>
                    <img src={addURL} style={{width: 230, height: "auto" }} alt="" />
                   </Box>
              </Box>
              <MidSection />
              <Slide 
                timer = {true}
                title = "Discounts For You"
             />
                  <Slide 
                timer = {true}
                title = "Suggested Items"
             />
            <Slide 
                timer = {true}
                title = "Top Selection"
            />
            <Slide 
                timer = {true}
                title = "Recommended Items"
            />
               <Slide 
                timer = {true}
                title = "Bestsellers"
            />
         
         
            </Box>
       
       
        </div>
           
    )
}

export default Home
