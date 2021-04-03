import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './components/Footer';
import SearchAppBar from './components/SearchAppBar';
import ProductGrid from './components/ProductGrid';

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