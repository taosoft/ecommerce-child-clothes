import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './components/ProductList/Footer';
import SearchAppBar from './components/ProductList/SearchAppBar';
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