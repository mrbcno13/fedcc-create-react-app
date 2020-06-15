import React, {useEffect, useContext} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {ImageJsonContext} from '../Contants';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function ListingPage(props) {
  const classes = useStyles();
  const imagesJson = useContext(ImageJsonContext);

  useEffect(() => {
    return () => {
      // cleanup
    }
  }, [props])

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <Grid item xs={12} style={{background: "#000", color: "#fff"}}>
            HEADER
          </Grid>
          {
            imagesJson.map(imgJson => 
              <Grid item sm={12} md={6} key={imgJson.id}>
                {/* https://stackoverflow.com/questions/47196800/reactjs-and-images-in-public-folder */}
                <img src={`${process.env.PUBLIC_URL}/assets/${imgJson.thumb}`} alt={imgJson.title} />
              </Grid>)
          }
        </Grid>
      </Container>
    </div>
  )
}

export default ListingPage
