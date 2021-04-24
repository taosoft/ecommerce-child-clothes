import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Redirect, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '1%'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

export default function Header() {
  const classes = useStyles();
  
  const [redirect, setRedirect] = useState(null)
  const [state, setState] = useState({
    left: false,
    name: 'left'
  });

  const handleSearch = (event) => {
    if(event.key === 'Enter') {
      alert(event.target.value)
    }
  }

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, left: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[{text: 'Productos', show: true, component: ShoppingBasketIcon, path: "/products"}, 
          {text: 'Dashboard', show: true, component: DashboardIcon, path: "/dashboard"}]
          .filter((data) => data.show === true)
          .map((data, index) => {
            const SpecificIcon = data.component;
            if(redirect !== null) {
              return <Redirect push to={redirect} />
            }
            else {
              return (
                <ListItem button key={index} onClick={() => setRedirect(data.path)}>
                  <ListItemIcon>
                      <SpecificIcon key={index} />
                  </ListItemIcon>
                  <ListItemText primary={data.text} />
                </ListItem>
              );
            }
          }
        )}
      </List>
      <Divider />
      <List>
        {[{text: 'Sign In', show: true, component: VpnKeyIcon, path: "/login"}, 
          {text: 'Sign Up', show: true, component: VpnKeyIcon, path: "/singup"}, 
          {text: 'Log Out', show: true, component: ExitToAppIcon, path: "/"}].filter((data) => data.show === true).map((data, index) => {
            const SpecificIcon = data.component;
            if(redirect !== null) {
              return <Redirect push to={redirect} />
            }
            else {
              return (
                <ListItem button key={index} onClick={() => setRedirect(data.path)}>
                  <ListItemIcon>
                    <SpecificIcon key={index} />
                    </ListItemIcon>
                  <ListItemText primary={data.text} />
                </ListItem>
              );
            }
          }
        )}
      </List>
    </div>
  );
  
  if(redirect !== null) {
    return <Redirect push to={redirect} />
  }
  else {
    return (
      <div className={classes.root}>
        <SwipeableDrawer
          anchor={state.name}
          open={state.left}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list(state.name)}
        </SwipeableDrawer>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.title}>
              <Link to="/">
                <Button>Ropa de niños</Button>
              </Link>
            </div>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Buscar…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onKeyUp={handleSearch}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
