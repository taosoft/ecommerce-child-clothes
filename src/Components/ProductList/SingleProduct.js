import { getProduct } from '../../api';
import { useState, useEffect } from 'react';
import Product from './Product';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Footer from '../LandingPage/Footer';
import Header from '../LandingPage/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

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
      <div className={classes.root}>
        <CssBaseline />
        <Header title="Small World"/>
        <Container maxWidth="lg" className={classes.container}>
        <div style={{ display:'flex', justifyContent:'center' }}>
          <Grid item xs={6}>
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <Typography component="h2" variant="h5">
                  <Product
                      key={person.id}
                      price={person.name}
                      description={person.email}
                      title={person.name}
                  />
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
