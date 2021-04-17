import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import ProductGrid from "./components/ProductList/ProductGrid";
import TestProducts from './components/ProductList/TestProducts'
import SingleTestProduct from './components/ProductList/SingleTest'
import Dashboard from './components/Dashboard/Dashboard';

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route path="/products" component={ProductGrid}/>
            <Route path="/product/:id" component={SingleTestProduct}/>
            <Route path="/test" component={TestProducts}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/" exact component={LandingPage}/>
        </Switch>
      </BrowserRouter>
  </div>
  );
}

export default Router;
