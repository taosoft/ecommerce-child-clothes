import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ListIcon from '@material-ui/icons/List';
import { Redirect } from 'react-router-dom'
import List from '@material-ui/core/List';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'


export default function MainListItems () {
  const [redirect, setRedirect] = useState(null)

  if(redirect !== null) {
    return <Redirect push to={redirect} />
  }
  else {
    return (
      <React.Fragment>
      <List>
        <ListItem button onClick={() => setRedirect('/products')}>
          <ListItemIcon>
            <ShoppingBasketIcon />
          </ListItemIcon>
          <ListItemText primary="Productos" />
        </ListItem>
        <ListItem button onClick={() => setRedirect('/dashboard')}>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => setRedirect('/dashboard/product-list')}>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="Lista de Productos" />
        </ListItem>
        <ListItem button onClick={() => setRedirect('/dashboard/add-product')}>
          <ListItemIcon>
            <AddBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Alta producto" />
        </ListItem>
      </List>
      </React.Fragment>
    );
  }
}