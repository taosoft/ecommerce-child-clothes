import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import ProductGrid from "./components/ProductList/ProductGrid";
import SingleProduct from './components/ProductList/SingleProduct';
import Dashboard from './components/Dashboard/Dashboard';
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import AddProduct from './components/Dashboard/AddProduct'

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route path="/products" component={ProductGrid}/>
            <Route path="/product/:id" component={SingleProduct}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/login" component={Login}/>
            <Route path="/singup" component={SignUp}/>
            <Route path="/addproduct" component={AddProduct}/>
            <Route path="/" exact component={LandingPage}/>
        </Switch>
      </BrowserRouter>
  </div>
  );
}

export default Router;
