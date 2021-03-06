
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import ReactPlayer from 'react-player';
import heroVideo from '../../videos/homebg.mp4';

const useStyles = makeStyles(theme => ({
  main: {
    width: '100%',
    height: '70vh',
    position: 'relative',
    '& video': {
      objectFit: 'cover',
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  // searchBar: {
  //   padding: '10px',
  //   width: '300px',
  //   backgroundColor: '#fff',
  //   border: '5px solid green',
  //   fontSize: '20px',
  //   color: 'black'

  // },

  title: {
    fontFamily: 'Merienda',
    paddingBottom: theme.spacing(3),
    color: 'yellow',
    textShadow: '3px 3px green',
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <section className={classes.main}>
      <ReactPlayer url={heroVideo} playing loop muted width="100%" height="100%" />
      <div className={classes.overlay}>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="white"
        >
          <Typography variant="h3" component="h1" className={classes.title} >
            <p className={classes.title}>GET YOUR PARKING PERMIT FROM ANYWHERE</p>
            Parking made easy.
          </Typography>

          {/* <input className={classes.searchBar} 
            type="text" 
            placeholder="Search for Parking or Apartment"
            placeholderTextColor = {'red'}
            placeholderFontSize = "20px" /> */}
        </Box>
      </div>
    </section>
  );
};

export default Hero;
