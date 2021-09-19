import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TableFooter,
  Typography,
} from "@material-ui/core";
import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { makeStyles } from "@material-ui/core/styles";
// import { FacebookRoundedIcon } from "@mui/icons-material/FacebookRounded";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const useStyles = makeStyles((theme) => ({
  imageStyle: {
    width: "90%",
  },
  mainList: {},
  itemList: {
    paddingLeft: "0px",
    paddingBottom: "0px",
    color: "#A8AACE",
    "&:hover": {
      color: "#fff",
    },
  },
  iconList: {
    minWidth: "20px",
  },
  styleIcon: {
    fonnSize: "1rem",
    width: "0.6em",
    color: "#A8AACE",
  },
  footerTitle: {
    // color: "#A8AACE",
    color: "#CECEF2",
    fontWeight: "bold",
  },
  tagLine: {
    color: "#A8AACE",
    marginTop: "0.5rem",
  },
  cntact: {
    color: "#CECEF2",
    fontWeight: "bold",
    marginTop: "0.5rem",
  },
  footerIcon: {
    color: "#A8AACE",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Container>
      {/* <Box>
        <h2>footer</h2>
        <h2>footer</h2>
        <h2>footer</h2>
        <h2>footer</h2>
      </Box> */}
      <Grid container>
        <Grid item lg={2} md={3} sm={6} xs={6}>
          <Typography variant="h6" className={classes.footerTitle}>
            About us
          </Typography>
          <List
            // component="nav"
            // disablePadding="false"
            aria-label="main mailbox folders"
            className={classes.mainList}
          >
            <ListItem className={classes.itemList}>
              <ListItemIcon className={classes.iconList}>
                <ArrowForwardIosIcon className={classes.styleIcon} />
              </ListItemIcon>
              <ListItemText primary="Company Profile" />
            </ListItem>
            <ListItem className={classes.itemList}>
              <ListItemIcon className={classes.iconList}>
                <ArrowForwardIosIcon className={classes.styleIcon} />
              </ListItemIcon>
              <ListItemText primary="Leadership" />
            </ListItem>
            <ListItem className={classes.itemList}>
              <ListItemIcon className={classes.iconList}>
                <ArrowForwardIosIcon className={classes.styleIcon} />
              </ListItemIcon>
              <ListItemText primary="Innovations" />
            </ListItem>
            <ListItem className={classes.itemList}>
              <ListItemIcon className={classes.iconList}>
                <ArrowForwardIosIcon className={classes.styleIcon} />
              </ListItemIcon>
              <ListItemText primary="Vision" />
            </ListItem>
            <ListItem className={classes.itemList}>
              <ListItemIcon className={classes.iconList}>
                <ArrowForwardIosIcon className={classes.styleIcon} />
              </ListItemIcon>
              <ListItemText primary="FAQS" />
            </ListItem>
          </List>
        </Grid>
        <Grid item lg={2} md={3} sm={6} xs={6}>
          <Typography variant="h6" className={classes.footerTitle}>
            Quick Links
          </Typography>
          <List
            // component="nav"
            // disablePadding="false"
            aria-label="main mailbox folders"
            className={classes.mainList}
          >
            <ListItem className={classes.itemList}>
              <ListItemIcon className={classes.iconList}>
                <ArrowForwardIosIcon className={classes.styleIcon} />
              </ListItemIcon>
              <ListItemText primary="Career" />
            </ListItem>
            <ListItem className={classes.itemList}>
              <ListItemIcon className={classes.iconList}>
                <ArrowForwardIosIcon className={classes.styleIcon} />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Grid>
        <Grid item lg={2} md={3} sm={6} xs={6}>
          <Typography variant="h6" className={classes.footerTitle}>
            Services
          </Typography>
          <List
            // component="nav"
            // disablePadding="false"
            aria-label="main mailbox folders"
            className={classes.mainList}
          >
            <ListItem className={classes.itemList}>
              <ListItemIcon className={classes.iconList}>
                <ArrowForwardIosIcon className={classes.styleIcon} />
              </ListItemIcon>
              <ListItemText primary="Influencer Marketing" />
            </ListItem>
            <ListItem className={classes.itemList}>
              <ListItemIcon className={classes.iconList}>
                <ArrowForwardIosIcon className={classes.styleIcon} />
              </ListItemIcon>
              <ListItemText primary="Social Media Management" />
            </ListItem>
            <ListItem className={classes.itemList}>
              <ListItemIcon className={classes.iconList}>
                <ArrowForwardIosIcon className={classes.styleIcon} />
              </ListItemIcon>
              <ListItemText primary="Digital Advertisement" />
            </ListItem>
            <ListItem className={classes.itemList}>
              <ListItemIcon className={classes.iconList}>
                <ArrowForwardIosIcon className={classes.styleIcon} />
              </ListItemIcon>
              <ListItemText primary="Digitalizing Businesses" />
            </ListItem>
          </List>
        </Grid>
        <Grid item lg={2} md={3} sm={6} xs={6}>
          <Typography variant="h6" className={classes.footerTitle}>
            Clients
          </Typography>
          <List
            // component="nav"
            // disablePadding="false"
            aria-label="main mailbox folders"
            className={classes.mainList}
          >
            <ListItem className={classes.itemList}>
              <ListItemIcon className={classes.iconList}>
                <ArrowForwardIosIcon className={classes.styleIcon} />
              </ListItemIcon>
              <ListItemText primary="Company Profile" />
            </ListItem>
            <ListItem className={classes.itemList}>
              <ListItemIcon className={classes.iconList}>
                <ArrowForwardIosIcon className={classes.styleIcon} />
              </ListItemIcon>
              <ListItemText primary="Leadership" />
            </ListItem>
            <ListItem className={classes.itemList}>
              <ListItemIcon className={classes.iconList}>
                <ArrowForwardIosIcon className={classes.styleIcon} />
              </ListItemIcon>
              <ListItemText primary="Innovations" />
            </ListItem>
            <ListItem className={classes.itemList}>
              <ListItemIcon className={classes.iconList}>
                <ArrowForwardIosIcon className={classes.styleIcon} />
              </ListItemIcon>
              <ListItemText primary="Vision" />
            </ListItem>
            <ListItem className={classes.itemList}>
              <ListItemIcon className={classes.iconList}>
                <ArrowForwardIosIcon className={classes.styleIcon} />
              </ListItemIcon>
              <ListItemText primary="FAQS" />
            </ListItem>
          </List>
        </Grid>
        <Grid item lg={4} md={12} sm={12} xs={12}>
          <Box textAlign="center">
            <Typography variant="h3">
              <span style={{ color: "#ffffff" }}>TheBIG</span>
              <span style={{ color: "#70d1e0" }}>BREAK</span>
            </Typography>
            <Typography className={classes.tagLine}>
              This is a big one and i consider it one of the most important
              thing in the business
            </Typography>
            <Typography className={classes.cntact}>
              contact@thebigbreak.in
            </Typography>
            <Box className={classes.footerIcon} mt={1} mb={1}>
              <FacebookIcon />

              <TwitterIcon style={{ color: "#00E6CD" }} />
              <a href="https://www.instagram.com/thebigbreak.in/">
                <InstagramIcon />
              </a>
              <WhatsAppIcon style={{ color: "#00E6CD" }} />
              <LinkedInIcon />

              {/* <InstagramIcon /> */}
            </Box>
            <Typography style={{ color: "#E7E9EB" }}>
              &copy;<span>thebigbreak.in</span>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
