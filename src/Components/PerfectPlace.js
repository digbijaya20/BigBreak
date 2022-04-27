import { Box, Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import perfectPlace from '../Assets/SvgImages/perfectPlace-2.svg';
import { makeStyles } from '@material-ui/core/styles';
// import DeleteIcon from '@material-ui/icons/Delete';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
    
      imageStyle:{
        width:'90%',
        
    },
    mainHeading:{
        fontWeight: "bold",
    },
    subHeading:{
        fontWeight: "bold",
    },
    subText:{
        color:'rgba(0, 0, 0, 0.54)',
        marginTop:"7px",
        fontWeight: "bold",
    },
    cardStyle: {
        maxWidth: 350,
        color:'rgba(0, 0, 0, 0.45)',
        marginTop:"15px",
        // boxShadow:'none',
      },
      btnStyle:{
        marginTop:"10px",
          backgroundColor:"#70d1e0",
      }


}))
const PerfectPlace = () =>{
    const classes = useStyles();
    return(
        <Box mt={4}>
            <Grid container>
                <Grid item sm={12} xs={12} md={6} lg={6} >
                    <Typography className={classes.mainHeading} variant="h2" >
                        Perfect place for your business promotion
                    </Typography>
                    <Typography className={classes.subText} variant="h5" color="default" >
                        Businesses generally promote their brand, products,<br/> and services 
                        by identifying audiance
                    </Typography>
                    <Button className={classes.btnStyle} endIcon={<NavigateNextIcon/>}>
                        Get Start
                    </Button>
                    <Card className={classes.cardStyle}>
                        
                        <CardContent>
                        <Typography variant="h5" component="h5" 
                        style={{color:"#70d1e0",fontSize:"30px", fontWeight:"bold"}}
                        >
                            ''
                        </Typography>

                        There is no shortage of ideas, what's missing is the will to execute them. ~ 
                        <span style={{fontWeight:"bold"}}>Seth Godin</span>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={6} >
                <Box >
                    <img src={perfectPlace} alt="perfct Place" className={classes.imageStyle} />
                </Box>
                </Grid>
            </Grid>
            
        </Box>
    )
}

export default PerfectPlace;
