import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './components/ProductList/Footer';
import SearchAppBar from './components/ProductList/SearchAppBar';
import ProductGrid from './components/ProductList/ProductGrid';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <SearchAppBar/>
      <main>
        <ProductGrid/>
      </main>
      <Footer/>
    </React.Fragment>
  );
}