import { useEffect, useState } from 'react';
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
import { useLocation, Redirect } from "react-router-dom";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  container: {
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function LandingPage() {
  const featuredPosts = useSelector(selectLandingPageProducts);
  const dispatch = useDispatch();
  const classes = useStyles();

  const search = useLocation().search;
  const confirmationId = new URLSearchParams(search).get('id');
  const [firstRender, setFirstRender] = useState(true)

  if(firstRender && confirmationId) {
    axios.get(`/api/users/confirmation/${confirmationId}`).then(() => setRedirect(true))
  }

  useEffect(() => {
    dispatch(loadLandingPageProducts());
    setFirstRender(false)
  },[dispatch])

  const [redirect, setRedirect] = useState(false)

  if(redirect) {
    return <Redirect push to={'/login'} />
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header showSearchBar={false}/>
      <Container component="main" maxWidth="lg" className={classes.container}>
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
    </div>
  );
}