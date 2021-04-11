import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import ProductGrid from "./components/ProductList/ProductGrid";
import Test from './components/ProductList/Test'
import SingleTest from './components/ProductList/SingleTest'

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route path="/products" component={ProductGrid}/>
            <Route path="/test" component={Test}/>
            <Route path="/singletest/:id" component={SingleTest}/>
            <Route path="/" exact component={LandingPage}/>
        </Switch>
    </BrowserRouter>
  </div>
  );
}

export default Router;
