import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Product from './Product';
import Header from './../LandingPage/Header';
import Footer from './Footer';
import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';

export default function ProductGrid(){
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <React.Fragment>
            <CssBaseline />
            <Header title="Ropa de niños"/>
            <Container maxWidth="lg">
            <main>
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4} >
                            <Product 
                                key={card}
                                price={"Precio"}
                                description={"Descripcion"}
                                title={"titulo"}
                            />
                        </Grid>
                    ))}
                </Grid>
            </main>
            </Container>
            <Footer/>
        </React.Fragment>
    )
}
