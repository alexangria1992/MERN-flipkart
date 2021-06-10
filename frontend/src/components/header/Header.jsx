import {AppBar, Box, makeStyles, Toolbar, Typography, withStyles} from "@material-ui/core"
import SearchBar from "./SearchBar"
import HeaderButtons from "./HeaderButtons"
import {Link} from "react-router-dom"
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
        lineHeight: 0,
        textDecoration: "none",
        color: "#fff"
    },
    subHeading: {
        fontSize: 10,
        fontStyle: "italic"
    }
    
})

const ToolBar = withStyles({
    root: {
        minHeight: 55
    }
})(Toolbar)

const Header = () => {
    const classes = useStyle()
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return ( 
        <AppBar className={classes.header}>
            <Toolbar>
                <Link to="/" className={classes.component}>
                <img src={logoURL} alt="" className={classes.logo} />
                <Box className={classes.container}>
                    <Typography className={classes.subHeading}>
                        Explore  <Box component="span" style={{color: "#FFE500"}}>plus</Box>
                    </Typography>
                    <img src={subURL} alt="" className={classes.subURL} />

                </Box>
               
                </Link>  
                <SearchBar />   
                <HeaderButtons />
            </Toolbar>
        </AppBar>
    )
}

export default Header;