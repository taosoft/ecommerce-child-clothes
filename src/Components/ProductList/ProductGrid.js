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
import { addCartProduct } from '../../app/stores/cartSlice';

export default function ProductGrid(){
    const [redirect, setRedirect] = useState(null)
    const products = [...useSelector(selectStock)];
    const [estado, setEstado] = useState(2); // default: < to >

    const dispatch = useDispatch();  

    useEffect(() => {
      dispatch(loadStockProducts());
    },[dispatch])

    const addProductToCart = (product) => {
        const newCartProduct = {
          product: product.product,
          quantity: 1
        };
        dispatch(addCartProduct(newCartProduct));
    }

    if(redirect !== null) {
        return <Redirect push to={redirect} />
    }
    else {
        if(estado === 2) products.sort((a, b) => a - b) // < to >
        else products.sort((a, b) => b - a) // > to <
        
        return (
            <React.Fragment>
                <CssBaseline />
                <Header title="Small World"/>
                <Container maxWidth="lg">
                <ControlledOpenSelect state={estado} setState={setEstado} />
                <main>
                    <Grid container spacing={4}>
                        {products.map((product) => (
                            <Grid item key={product.id} xs={12} sm={6} md={4} >
                                <CardActionArea component="a" onClick={() => setRedirect(`/product/${product.id}`)}>
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
