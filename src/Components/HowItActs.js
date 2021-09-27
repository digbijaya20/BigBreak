import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import perfectPlace from "../Assets/SvgImages/perfectPlace-2.svg";
import { alpha, makeStyles } from "@material-ui/core/styles";
// import DeleteIcon from '@material-ui/icons/Delete';
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import influencer from "../Assets/ActPngIcons/influencer.png";
import socialMediaManagement from "../Assets/ActPngIcons/socialMediaManagement.png";
import digitalAds from "../Assets/ActPngIcons/digitalAds.png";
import businessess from "../Assets/ActPngIcons/businessess.png";

const useStyles = makeStyles((theme) => ({
  imageStyle: {
    width: "90%",
  },
  subText: {
    color: "rgba(0, 0, 0, 0.54)",
    marginTop: "7px",
  },
  cardStyle: {
    // maxWidth: 350,
    // color: 'rgba(0, 0, 0, 0.45)',
    marginTop: "30px",
    backgroundColor: "#ecf9ff",
    boxShadow: "none",

    "&:hover": {
      backgroundColor: "#70d1e0",
      boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
    },
  },
  btnStyle: {
    marginTop: "10px",
    backgroundColor: "#70d1e0",
  },
  headingStyle: {
    // color: "#70d1e0",
    // fontSize: "30px",
    fontWeight: "bold",
    paddingTop: "30px",
    paddingButtom: "30px",
  },
  headingSubText: {
    color: "rgba(0, 0, 0, 0.54)",
    // fontSize: "15px",
    fontWeight: "bold",
    // marginTop:"7px",
  },
  headingBorder: {
    borderTop: "4px solid #70d1e0",
    width: "30%",
    display: "inline-block",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "20px",
  },
  cardText: {
    fontSize: "15px",
    marginTop: "20px",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.45)",
  },
}));
const HowItActs = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box textAlign="center">
        <Typography
          variant="h2"
          className={classes.headingStyle}
        >
          How it works
        </Typography>
        <Box className={classes.headingBorder}></Box>
        <Typography
          variant="h5"
          className={classes.headingSubText}
          component="h5"
        >
          Businesses generally promote their brand, products, and services by
          identifying audiance
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item sm={12} xs={12} md={3} lg={3}>
          <Card className={classes.cardStyle}>
            <CardContent>
              <CardMedia>
                <img src={influencer} alt="i" />
              </CardMedia>

              <Typography
                className={classes.cardTitle}
                variant="h5"
                component="h5"
              >
                Influencer Marketing
              </Typography>
              <Typography variant="h6" className={classes.cardText}>
                Redefining digital marketing with the influencers that help your
                brand grow.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={12} xs={12} md={3} lg={3}>
          <Card className={classes.cardStyle}>
            <CardContent>
              <CardMedia>
                <img src={socialMediaManagement} height="65px" alt="i" />
              </CardMedia>
              <Typography
                className={classes.cardTitle}
                variant="h5"
                component="h5"
              >
                Social Media Mgnt
              </Typography>
              <Typography variant="h6" className={classes.cardText}>
                Digital media trends across all social media platforms, leave it
                to us to break the internet.{" "}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={12} xs={12} md={3} lg={3}>
          <Card className={classes.cardStyle}>
            <CardContent>
              <CardMedia>
                <img src={digitalAds} alt="i" />
              </CardMedia>
              <Typography
                className={classes.cardTitle}
                variant="h5"
                component="h5"
              >
                Digital Advertisement
              </Typography>
              <Typography variant="h6" className={classes.cardText}>
                Shaping emerging brands while envisioning their digital growth
                with potential brand placements.{" "}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={12} xs={12} md={3} lg={3}>
          <Card className={classes.cardStyle}>
            <CardContent>
              <CardMedia>
                <img src={businessess} alt="i" />
              </CardMedia>
              <Typography
                className={classes.cardTitle}
                variant="h5"
                component="h5"
              >
                Digitalizing Businesses
              </Typography>
              <Typography variant="h6" className={classes.cardText}>
                We tell stories that your audience needs to hear and see. We
                produce the magic in HD.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HowItActs;
