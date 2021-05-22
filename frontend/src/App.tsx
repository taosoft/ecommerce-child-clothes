import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './Components/ProductList/Footer';
import SearchAppBar from './Components/ProductList/SearchAppBar';
import Router from './Router';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <SearchAppBar/>
      <main>
        <Router/>
      </main>
      <Footer/>
    </React.Fragment>
  );
}