import React, { useEffect } from "react";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MainListItems from './listItems'
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home'
import MaterialTable from "@material-table/core";
import { useDispatch, useSelector } from 'react-redux';
import { loadStockProducts, selectStock, updateStockProduct, deleteProductStock } from '../../app/stores/stockSlice';
import ControlledOpenSelect from "../ProductList/MenuFiltrado";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  footer: {
    padding: theme.spacing(1, 1),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  table: {
    minWidth: 650,
  },
}));

function Copyright() {
    const classes = useStyles();
    return (
      <footer className={classes.footer}>
        <Typography variant="body2" color="textSecondary" align="center">
          {`Copyright © Your Website ${new Date().getFullYear()}.`}
        </Typography>
      </footer>
    );
  }

const ProductTable = () => {

  const products = [...useSelector(selectStock)];
  const dispatch = useDispatch();  
  useEffect(() => {
    if(products.length === 0){
        dispatch(loadStockProducts());
    }
  },[dispatch, products.length])

  const columns = [
    {title: "Titulo", field: "product.title"},
    {title: "Descripcion", field: "product.description"},
    {title: "Precio", field: "product.price"},
    {title: "Stock", field: "quantity"},
  ]
  return (
        <MaterialTable
          columns={columns}
          data={products}
          editable={{
            onRowUpdate: (newData, oldData) => {
              dispatch(updateStockProduct(newData));
              return Promise.resolve();
          },
          onRowDelete: data =>  {
            dispatch(deleteProductStock(data.product));
            return Promise.resolve();
          }
        }}
        />
  )
}

export default function ProductList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              <Link to="/">
                  <Button startIcon={<HomeIcon />} /> 
              </Link>
              Lista de Productos
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <MainListItems />
        </Drawer>
        <main className={classes.content}>
          <ProductTable />
          <div className={classes.appBarSpacer} />
            <Copyright />
        </main>
      </div>
    );
}
