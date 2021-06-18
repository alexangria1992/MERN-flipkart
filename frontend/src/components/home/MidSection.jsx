import React from 'react'
import { Box, makeStyles } from '@material-ui/core';
import {imageURL} from "../../constants/data"

const useStyle = makeStyles({
    wrapper: {
        display: 'flex',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    image: {
        width: '33%'
    }
})
const MidSection = () => {
    const classes = useStyle();

    return (
        <>
        <Box className={classes.wrapper}>
            {
                imageURL.map(image => (
                    <img src={image} style={{width: "33%"}} alt="" />
                ))
            }
        </Box>
        <img style={{width: "100%", marginTop: 20 }}  />
        </>
    )
}

export default MidSection
