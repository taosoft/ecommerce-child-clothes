import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from './Header';
import MapIcon from '@material-ui/icons/Map';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

function Footer() {
  return (
    <Typography>
        <Typography variant="body2" color="textSecondary">
            <Typography variant="body2" color="textSecondary">
                <EmailIcon /> aboutus@smallworld.com
            </Typography>
            <Typography variant="body2" color="textSecondary">
                <PhoneIcon /> 11 4878-8756
            </Typography>
            <Typography variant="body2" color="textSecondary">
                <MapIcon /> Lima 775, Ciudad Autónoma de Buenos Aires
            </Typography>
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
            Copyright © Ecommerce - Small World {new Date().getFullYear()}
        </Typography>
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
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(1),
  },
  footer: {
    padding: theme.spacing(1, 1),
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
      <Container maxWidth="lg" component="main" className={classes.main}>
        <Typography variant="h2" component="h1" gutterBottom>
          Acerca de Small World
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
            Somos una empresa en pleno crecimiento y con grandes expectativas. 
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
            Nuestro propósito es ser la empresa más grande de ropa de niños en América Latina, otorgando calidad y precios accesibles.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
            Nuestro propósito es ser la empresa más grande de ropa de niños en América Latina, otorgando calidad y precios accesibles.
        </Typography>
      </Container>
      <Container maxWidth="lg">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.478845883657!2d-58.383995984687594!3d-34.61733766572608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccad7e0f04d05%3A0x5e346deecfd0864!2sLima%20775%2C%20C1073AAO%20CABA!5e0!3m2!1sen!2sar!4v1624299596725!5m2!1sen!2sar"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy">
        </iframe>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Footer />
        </Container>
      </footer>
    </div>
  );
}