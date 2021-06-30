import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ListIcon from '@material-ui/icons/List';
import { Redirect } from 'react-router-dom'
import List from '@material-ui/core/List';
import React, { useState } from 'react';

export default function MainListItems () {
  const [redirect, setRedirect] = useState(null)

  if(redirect !== null && redirect !== window.location.pathname) {
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
        <ListItem button onClick={() => setRedirect('/purchases')}>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="Mis compras" />
        </ListItem>
      </List>
      </React.Fragment>
    );
  }
}