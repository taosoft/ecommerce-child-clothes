import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './Components/Footer';
import SearchAppBar from './Components/SearchAppBar';
import ProductGrid from './Components/ProductGrid';

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