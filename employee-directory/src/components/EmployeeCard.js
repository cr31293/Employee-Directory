import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';



const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      marginTop: 20,
      marginLeft: 15,
      marginRight: 10,
      display: 'block',
      flexGrow: 1

    },
    media: {
        height: 140,
    },
    content: {
        border: 2,
    },
    container: {
        padding: 10,

    }
  });

function EmployeeCard(props) {
const classes = useStyles();

    return (<>
        <Grid container className={classes.container}>
        {props.results.map(results => (
        <Grid container className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {results.picture.large}
          title="Employee Profile Picture"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {results.name.first} {results.name.last}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    
    </Grid>
        ))}
    </Grid> 
    </>)
}

export default EmployeeCard;