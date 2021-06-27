import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Review from './Review';
import { useDispatch, useSelector } from 'react-redux';
import { updateProductStockSuccess } from '../../app/stores/stockSlice';
import { selectCartProducts } from '../../app/stores/cartSlice';
import { addSale } from '../../app/stores/salesSlice';
import { selectLoggedUser } from '../../app/stores/authSlice';
import Footer from '../LandingPage/Footer';
import Header from '../LandingPage/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Revisión de orden'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectCartProducts);
  const user = useSelector(selectLoggedUser);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if(activeStep === 0){
        let newSale = {
            products: cartProducts,
            user: user,
            date: new Date()
        }
        dispatch(addSale(newSale, user?.token));
        cartProducts.forEach(cartProduct => dispatch(updateProductStockSuccess(cartProduct)));
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header/>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Finalizando su compra
          </Typography>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Gracias por comprar en Small World.
                </Typography>
                <Typography variant="subtitle1">
                  {`Su número de compra es #${Math.floor(Math.random() * 100000)}.`}
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    disabled={cartProducts.length === 0}
                  >
                    {activeStep === steps.length - 1 ? 'Comprar' : 'Siguiente'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
      <Footer />
    </div>
  );
}