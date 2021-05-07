import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { selectCartProducts } from '../../app/stores/cartSlice';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();
  const products = useSelector(selectCartProducts);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Productos seleccionados
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.product.id}>
            <ListItemText primary={product.product.title} secondary={product.product.description} />
            <Typography variant="body2">${product.product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ${products.length > 0 ? 
            products.map( product => product.product.price)?.reduce((a,b) => a + b).toFixed(2) :
            0}
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}