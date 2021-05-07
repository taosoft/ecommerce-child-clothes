import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Product from './Product';
import Header from '../LandingPage/Header';
import Footer from './Footer';
import React, { useState, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Redirect } from 'react-router-dom';
import ControlledOpenSelect from './MenuFiltrado';
import { useDispatch, useSelector } from 'react-redux';
import { loadStockProducts, selectStock } from '../../app/stores/stockSlice';
import { addCartProduct, selectCartProducts, updateCartProductSuccess } from '../../app/stores/cartSlice';

export default function ProductGrid(){
    const [redirect, setRedirect] = useState(null)
    const products = [...useSelector(selectStock)];
    const cartProducts = useSelector(selectCartProducts);
    const [estado, setEstado] = useState(2); // default: < to >

    const dispatch = useDispatch();  

    useEffect(() => {
      dispatch(loadStockProducts());
    },[dispatch])

    const addProductToCart = (product) => {
        let cartProduct = cartProducts.find(cartProduct => cartProduct.product?.id === product?.product.id);
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
        return (
            <React.Fragment>
                <CssBaseline />
                <Header title="Small World"/>
                <Container maxWidth="lg">
                <ControlledOpenSelect state={estado} setState={setEstado} />
                <main>
                    <Grid container spacing={4}>
                        {products.map((product) => (
                            <Grid item key={product.product.id} xs={12} sm={6} md={4} >
                                <CardActionArea component="a" onClick={() => setRedirect(`/product/${product.product.id}`)}>
                                    <Product 
                                        key={product.product.id}
                                        price={product.product.price}
                                        description={product.product.description}
                                        title={product.product.title}
                                        addToCart={() => addProductToCart(product)}
                                    />
                                </CardActionArea>
                            </Grid>
                        ))}
                    </Grid>
                </main>
                </Container>
                <Footer/>
            </React.Fragment>
        )
    }
}
