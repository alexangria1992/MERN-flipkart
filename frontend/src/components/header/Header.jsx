import {AppBar, Box, makeStyles, Toolbar, Typography} from "@material-ui/core"

const useStyle = makeStyles({
    header: {
        background: "#2824f0",
        height: 55
    },
    logo: {
        width: 75
    },
    subURL: {
        width: 10,
        height: 10,
        marginLeft: 4
    },
    container: {
        display: "flex",

    },
    component: 
    {
        marginLeft: "12%",
        lineHeight: 0
    },
    subHeading: {
        fontSize: 10,
        fontStyle: "italic"
    }
    
})

const Header = () => {
    const classes = useStyle()
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return ( 
        <AppBar className={classes.header}>
            <Toolbar>
                <Box className={classes.component}>
                <img src={logoURL} alt="" className={classes.logo} />
                <Box className={classes.container}>
                    <Typography className={classes.subHeading}>
                        Explore plus
                    </Typography>
                    <img src={subURL} alt="" className={classes.subURL} />

                </Box>
               
                </Box>     
            </Toolbar>
        </AppBar>
    )
}

export default Header;