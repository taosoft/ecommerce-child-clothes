import {
  BrowserRouter,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import ProductGrid from "./components/ProductList/ProductGrid";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route path="/" component={LandingPage} exact/>
            <Route path="/products" component={ProductGrid}/>
            <Redirect to="/" />
        </Switch>
    </BrowserRouter>
  </div>
  );
}

export default Router;
