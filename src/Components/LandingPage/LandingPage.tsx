import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';
import Header from './Header';
import Stepper from './Stepper';
import { makeStyles } from '@material-ui/core/styles';
import { loadLandingPageProducts, selectLandingPageProducts } from '../../app/stores/landingProductSlice';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles(() => ({
  container: {
    minHeight: '100%',
    margin: '0 auto 88px',
    height: '100%'
  },
}));

export default function LandingPage() {
  const featuredPosts = useSelector(selectLandingPageProducts);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(loadLandingPageProducts());
  },[dispatch])

  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      <Container maxWidth="lg" className={classes.container}>
        <main>
          <Stepper />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer/>
    </React.Fragment>
  );
}