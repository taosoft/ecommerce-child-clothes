import { useEffect, useState } from 'react';
import Product from './Product';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Footer from '../LandingPage/Footer';
import Header from '../LandingPage/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { loadStockProducts, selectStock } from '../../app/stores/stockSlice';
import { addCartProduct } from '../../app/stores/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import CartProduct from '../../models/cartProduct';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  container: {
    minHeight: '100%',
    margin: '0 auto 88px',
    height: '100%'
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
});

function SingleProduct(props: any) {
    const classes = useStyles();
    const [count, setCount] = useState(1);
    const stockProducts = useSelector(selectStock);
    const product = stockProducts.find(product => product.product.id === props.match.params.id);
    const stock = product?.quantity;

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(loadStockProducts());
    },[dispatch])

    const addProductToCart = () => {
      const newCartProduct: CartProduct = {
        product: product?.product,
        quantity: count
      };
      dispatch(addCartProduct(newCartProduct));
    }

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header/>
        <Container maxWidth="lg" className={classes.container}>
        <div style={{ display:'flex', justifyContent:'center' }}>
          <Grid item xs={6}>
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <Typography component="h2" variant="h5">
                  <Product
                      key={product?.product.id}
                      price={product?.product.price}
                      description={product?.product.description}
                      title={product?.product.title}
                      addToCart={addProductToCart}
                  />
                </Typography>
                <Typography>
                  <div>
                    Cantidad
                    <Button onClick={() => count > 1 ? setCount(count - 1) : count} >
                      <Icon color="primary" fontSize="small" >remove_circle</Icon>
                    </Button>
                    <span>{count}</span>
                    <Button onClick={() => stock && count < stock ? setCount(count + 1) : stock }>
                      <Icon color="primary" fontSize="small" >add_circle</Icon>
                    </Button>
                    Stock Disponible
                    <span>{stock}</span>
                  </div>
                </Typography>
              </div>
            </Card>
          </Grid>
        </div>
        </Container>
        <Footer/>
      </div>
    )
}

export default SingleProduct;
