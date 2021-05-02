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
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import RemoveIcon from '@material-ui/icons/Remove';
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
    const [person, setPerson] = useState({})
    const classes = useStyles();
    const count = useSelector(selectCount)
    const dispatch = useDispatch()

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
                <Typography>
                  <div>
                    Cantidad
                    <Button onClick={() => dispatch(decrement())} >
                    <Icon color="primary" fontSize="small" >remove_circle</Icon>
                    </Button>
                    <span>{count}</span>
                    <Button onClick={() => dispatch(increment())}>
                      <Icon color="primary" fontSize="small" >add_circle</Icon>
                    </Button>
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
