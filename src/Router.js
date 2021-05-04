import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import ProductGrid from "./Components/ProductList/ProductGrid";
import SingleProduct from './Components/ProductList/SingleProduct';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import AddProduct from './Components/Dashboard/AddProduct'

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
