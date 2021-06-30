import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Dashboard/Title';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Paper, TableContainer } from '@material-ui/core';
import { selectLoggedUser } from '../../app/stores/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { loadSales, loadUserSales, selectSales } from '../../app/stores/salesSlice';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();
  console.log(row)
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {`${new Date(row.creationDate).getDate()}/${new Date(row.creationDate).getMonth()+1}/${new Date(row.creationDate).getFullYear()}`}
        </TableCell>
        <TableCell>{row.user?.name}</TableCell>
        <TableCell align="right">{row.cartProducts.length}</TableCell>
        <TableCell align="right">${row.cartProducts.map(product => product.product.price * product.quantity)?.reduce((a,b) => a + b).toFixed(2)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Productos
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Tipo</TableCell>
                    <TableCell>Descripción</TableCell>
                    <TableCell align="right">Cantidad</TableCell>
                    <TableCell align="right">Precio unitario ($)</TableCell>
                    <TableCell align="right">Precio total ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.cartProducts.map((product) => (
                    <TableRow key={product.product?._id}>
                      <TableCell component="th" scope="row">
                        {product.product.title}
                      </TableCell>
                      <TableCell>{product.product.description}</TableCell>
                      <TableCell align="right">{product.quantity}</TableCell>
                      <TableCell align="right">${product.product.price}</TableCell>
                      <TableCell align="right">
                        ${product.product.price * product.quantity}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function Orders() {  
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedUser);

  useEffect(() => {
    dispatch(loadUserSales(user?.user?._id, user?.token));
  },[dispatch, user?.user?._id, user?.token])

  const sales = useSelector(selectSales);

  return (
    <React.Fragment>
      <Title>Realizaste {sales.length} compras</Title>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Fecha</TableCell>
              <TableCell>Usuario</TableCell>
              <TableCell align="right">Cantidad productos</TableCell>
              <TableCell align="right">Precio total ($)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sales.map((row) => (
              <Row key={row?._id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}