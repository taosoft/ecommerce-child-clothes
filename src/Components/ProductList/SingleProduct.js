import { getProduct } from '../../api';
import { useState, useEffect } from 'react';
import Product from './Product';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Footer from '../LandingPage/Footer';
import Header from '../LandingPage/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
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

function SingleProduct(props) {
    const [person, setPerson] = useState({})
    const classes = useStyles();

    useEffect(() => {
        const { id } = props.match.params;
        getProduct(id)
            .then(res => setPerson(res.data[0]))
            .catch((err) => console.log(err))
    },[props.match.params])

    return (
      <React.Fragment>
      <CssBaseline />
      <Header title="Ropa de niños"/>
      <Container maxWidth="lg" className={classes.container}>
      <main>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <Typography component="h2" variant="h5">
                <Product
                    key={person.id}
                    price={"1000"}
                    description={person.email}
                    title={person.name}
                />
              </Typography>
            </div>
          </Card>
        </Grid>
      </main>
      </Container>
      <Footer/>
    </React.Fragment>
    )
}

export default SingleProduct;
