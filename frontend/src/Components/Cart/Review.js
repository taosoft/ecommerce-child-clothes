import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { selectCartProducts, deleteProductFromCart, updateCartProductSuccess } from '../../app/stores/cartSlice';
import { selectStock } from '../../app/stores/stockSlice';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

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
  const stockProducts = useSelector(selectStock);
  const dispatch = useDispatch();

  const editProductToCart = (productId, isAdd) => {
    let quantityUpdated;
    let product = products.find(product => product.product._id === productId);
    const stockProduct = stockProducts.find(pro => pro.product._id === product.product._id);

    if(isAdd) {
      quantityUpdated = product && (product.quantity + 1) > stockProduct.quantity ? product.quantity : product.quantity + 1;
    }
    else {
      quantityUpdated = product && (product.quantity - 1) < 1 ? product.quantity : product.quantity - 1;
    }
    const productUpdated = {
      product: product.product,
      quantity: quantityUpdated
    }
    dispatch(updateCartProductSuccess(productUpdated));
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Productos seleccionados
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.product._id}>
            <ListItemText primary={product.product.title} secondary={product.product.description} />
            <Button onClick={() => editProductToCart(product.product._id, false)}>
              <Icon color="primary" fontSize="small" >remove_circle</Icon>
            </Button>
            <Typography variant="body2">{product.quantity} x ${product.product.price} = ${product.product.price}</Typography>
            <Button onClick={() => editProductToCart(product.product._id, true) }>
              <Icon color="primary" fontSize="small" >add_circle</Icon>
            </Button>
            <Button onClick={() => dispatch(deleteProductFromCart(product.product._id)) }>
              <Icon color="primary" fontSize="small" >delete</Icon>
            </Button>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ${products.length > 0 ? 
            products.map( product => product.product.price * product.quantity)?.reduce((a,b) => a + b).toFixed(2) :
            0}
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}