import { getProduct } from './../../api';
import { useState, useEffect } from 'react';
import Product from './../ProductList/Product';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

function SingleTestProduct(props) {
    const [person, setPerson] = useState({})
    const classes = useStyles();

    useEffect(() => 
        {
            const { id } = props.match.params;
            getProduct(id)
                .then(res => setPerson(res.data[0]))
                .catch((err) => console.log(err))
        },[props.match.params])

    return (
      <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#">
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  <Product
                      key={person.id}
                      price={"price"}
                      description={person.email}
                      title={person.name}
                  />
                </Typography>
              </CardContent>
            </div>
          </Card>
        </CardActionArea>
      </Grid>
    )
}

export default SingleTestProduct;
