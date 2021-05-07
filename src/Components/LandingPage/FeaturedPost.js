import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import { useState } from 'react';
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function FeaturedPost({post}) {
  const classes = useStyles();

  const [redirect, setRedirect] = useState(null)

  if(redirect !== null) {
    return <Redirect push to={redirect} />
  }
  else {
    return (
      <Grid item xs={12} md={6}>
        <CardActionArea component="a" onClick={() => setRedirect(`/product/${post.id}`)}>
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  {post.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {post.price}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {post.description}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                </Typography>
              </CardContent>
            </div>
            <Hidden xsDown>
              <CardMedia className={classes.cardMedia} src={post.image} title={post.imageTitle} component='img'/>
            </Hidden>
          </Card>
        </CardActionArea>
      </Grid>
    );
  }
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};