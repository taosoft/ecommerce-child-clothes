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
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { increment, decrement, selectCount } from '../../app/stores/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

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
    const [product, setProduct] = useState({})
    const classes = useStyles();
    const count = useSelector(selectCount)
    //const stock = useSelector(selectStock)
    const dispatch = useDispatch()

    const stock = 5

    useEffect(() => {
        const { id } = props.match.params;
        getProduct(id)
            .then(res => setProduct(res.data[0]))
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
                      key={product.id}
                      price={product.phone}
                      description={product.email}
                      title={product.name}
                  />
                </Typography>
                <Typography>
                  <div>
                    Cantidad
                    <Button onClick={() => count > 1 ? dispatch(decrement()) : count} >
                      <Icon color="primary" fontSize="small" >remove_circle</Icon>
                    </Button>
                    <span>{count}</span>
                    <Button onClick={() => count < stock ? dispatch(increment()) : stock }>
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
