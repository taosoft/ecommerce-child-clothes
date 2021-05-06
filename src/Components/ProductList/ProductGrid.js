import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Product from './Product';
import Header from '../LandingPage/Header';
import Footer from './Footer';
import React, { useState, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Redirect } from 'react-router-dom';
import { getProducts } from '../../api';
import ControlledOpenSelect from './MenuFiltrado';

export default function ProductGrid(){
    const [redirect, setRedirect] = useState(null)
    const [products, setProducts] = useState([])
    const [estado, setEstado] = useState(2); // default: < to >

    useEffect(() => 
    {
        getProducts()
            .then(res => setProducts(res.data))
            .catch((err) => console.log(err))
    }, [products])
    

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
                <ControlledOpenSelect state={setEstado} />
                <main>
                    <Grid container spacing={4}>
                        {products.map((product) => (
                            <Grid item key={product.id} xs={12} sm={6} md={4} >
                                <CardActionArea component="a" onClick={() => setRedirect(`/product/${product.id}`)}>
                                    <Product 
                                        key={product.id}
                                        price={product.phone}
                                        description={product.email}
                                        title={product.name}
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
