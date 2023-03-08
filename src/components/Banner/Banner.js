import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";
import React from "react";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url(banner.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
    margin: 0,
    padding: 0,
    backgroundRepeat: "no-repeat",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
//   carousel: {
//     height: "50%",
//     display: "flex",
//     alignItems: "center",
//   },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Coinex
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;
