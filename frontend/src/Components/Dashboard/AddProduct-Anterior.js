import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import Footer from '../LandingPage/Footer'
import Header from '../LandingPage/Header';
import { useDispatch } from 'react-redux';
import { addStockProduct } from '../../app/stores/stockSlice';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
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
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function AddProduct() {
  const classes = useStyles();
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [stock, setStock] = useState(0)
  const [image, setImage] = useState(null)
  const [redirect, setRedirect] = useState(null)

  const dispatch = useDispatch();

  const darDeAlta = () => {
    if(title !== '' && description !== '' && price !== 0 && stock !== 0 && image !== null) {
      // Se carga el producto al store
      let newProduct = {
        title: title,
        price: price,
        description: description,
        image: image,
        imageText: title,
        quantity: Math.floor(Math.random() * 100)
      }
      dispatch(addStockProduct(newProduct));
      setRedirect('dashboard/products')
    }
    else {
      alert('Debe completar todos los campos')
    }
  };

  if(redirect !== null) {
    return <Redirect push to={redirect} />
  }
  else {
    return (
      <div className={classes.root}>
          <CssBaseline />
          <Header showSearchBar={false} showCartBadge={false}/>
          <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h4" align="center">
                Alta de producto
                </Typography>
                <AddressForm
                    title={setTitle}
                    description={setDescription}
                    price={setPrice}
                    stock={setStock}
                    image={setImage}
                />
                <div className={classes.buttons}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={darDeAlta}
                        className={classes.button}
                    >
                    Dar de alta
                    </Button>
                </div>
            </Paper>
          </main>
          <Footer/>
      </div>
    );
  }
}