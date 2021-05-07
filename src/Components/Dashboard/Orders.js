import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, product, name, amount) {
  return { id, date, product, name, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Blue Jean', 'Elvis Presley', 312.44),
  createData(1, '16 Mar, 2019', 'White Socks', 'Paul McCartney', 866.99),
  createData(2, '16 Mar, 2019', 'Black T-Shirt', 'Tom Scholz', 100.81),
  createData(3, '16 Mar, 2019', 'Pink Tie', 'Michael Jackson', 654.39),
  createData(4, '15 Mar, 2019', 'Sleveless Shirt', 'Bruce Springsteen', 212.79),
];


export default function Orders() {  
    return (
      <React.Fragment>
        <Title>Ventas</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Sale Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.product}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    );
}