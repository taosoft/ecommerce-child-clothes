import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Header from './Header';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header showSearchBar={false}/>
      <Container component="main" className={classes.main}>
        <Typography variant="h2" component="h1" gutterBottom>
          Acerca de Small World
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
            Somos una empresa en pleno crecimiento y con grandes expectativas. Nuestro propósito es ser la empresa más grande de ropa de niños en América Latina, otorgando calidad y precios accesibles.
        </Typography>
        <Typography variant="body1">Sticky footer placeholder.</Typography>
      </Container>
      <Container>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.478845883657!2d-58.383995984687594!3d-34.61733766572608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccad7e0f04d05%3A0x5e346deecfd0864!2sLima%20775%2C%20C1073AAO%20CABA!5e0!3m2!1sen!2sar!4v1624299596725!5m2!1sen!2sar"
            width="100%"
            height="300"
            style={{ border: 0, display: "block", margin: "0" }}
            allowfullscreen=""
            loading="lazy">

        </iframe>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">My sticky footer can be found here.</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}