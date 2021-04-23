import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';
import Header from './Header';
import Stepper from './Stepper';
import { makeStyles } from '@material-ui/core/styles';

const featuredPosts = [
  {
    id: "1",
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    id: "2",
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    id: "3",
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    id: "4",
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  }
];

const useStyles = makeStyles(() => ({
  container: {
    minHeight: '100%',
    margin: '0 auto 88px',
    height: '100%'
  },
}));

export default function LandingPage() {

  const classes = useStyles();

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