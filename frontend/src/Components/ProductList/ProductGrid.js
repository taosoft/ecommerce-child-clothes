import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Product from './Product';
import Header from '../LandingPage/Header';
import Footer from '../LandingPage/Footer';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Redirect } from 'react-router-dom';
import ControlledOpenSelect from './MenuFiltrado';
import { useDispatch, useSelector } from 'react-redux';
import { loadStockProducts, selectIsLoading, selectStock } from '../../app/stores/stockSlice';
import { addCartProduct, selectCartProducts, updateCartProductSuccess } from '../../app/stores/cartSlice';
import { Backdrop } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    container: {
        minHeight: '100%',
        margin: '0 auto 10px',
        height: '100%',
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function ProductGrid(){
    const classes = useStyles();
    const [redirect, setRedirect] = useState(null)
    const copia = [...useSelector(selectStock)];
    const cartProducts = useSelector(selectCartProducts);
    const isLoading = useSelector(selectIsLoading);
    const [estado, setEstado] = useState(2); // default: < to >
    const [search, setSearch] = useState(null)
    let products = [...copia.filter(product => product.quantity > 0)];
    const dispatch = useDispatch();  

    useEffect(() => {
        if(products.length === 0){
            dispatch(loadStockProducts());
        }
    },[dispatch, products.length])

    const addProductToCart = (product) => {
        let cartProduct = cartProducts.find(cartProduct => cartProduct.product?._id === product?.product._id);
        const newCartProduct = {
          product: product?.product,
          quantity: 1
        };
        if(cartProduct === undefined) {
          dispatch(addCartProduct(newCartProduct))
        }
        else {
          newCartProduct.quantity = product && (newCartProduct.quantity + cartProduct.quantity) >  product?.quantity ? 
            product?.quantity : newCartProduct.quantity + cartProduct.quantity
          dispatch(updateCartProductSuccess(newCartProduct));
        }
    }

    if(redirect !== null) {
        return <Redirect push to={redirect} />
    }
    else {
        if(estado === 2) products.sort((a, b) => a.product.price - b.product.price) // < to >
        else products.sort((a, b) => b.product.price - a.product.price) // > to <
        if(search !== null) {
            products = [...products.filter(product => product.product.title.toLowerCase().includes(search.toLowerCase()))]
        }
        
        return (
            <div className={classes.root}>
                <CssBaseline />
                <Header title="Small World" searchText={setSearch}/>
                <Container maxWidth="lg" className={classes.container}>
                <ControlledOpenSelect state={estado} setState={setEstado} />
                <main>
                    <Grid container spacing={4}>
                        {products.map((product) => (
                            <Grid item key={product.product._id} xs={12} sm={6} md={4} >
                                <CardActionArea component="a" onClick={() => setRedirect(`/product/${product.product._id}`)}>
                                    <Product 
                                        key={product.product._id}
                                        price={product.product.price}
                                        description={product.product.description}
                                        title={product.product.title}
                                        image={product.product.image}
                                        addToCart={() => addProductToCart(product)}
                                    />
                                </CardActionArea>
                            </Grid>
                        ))}
                    </Grid>
                </main>
                </Container>
                <Footer/>
                <Backdrop className={classes.backdrop} open={isLoading}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>
        )
    }
}
