import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
//context
import ProductContextProviders from "./context/ProductContextProvider";
import CardContextProvider from "./context/CardContextProvider";
//components
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/shared/Navbar";
import ShopCard from "./components/ShopCard";
function App() {
  return (
    <ProductContextProviders>
      <CardContextProvider>
        <Navbar />
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Store} />
          <Route path="/Card" component={ShopCard} />
          <Redirect to="/products" />
        </Switch>
      </CardContextProvider>
    </ProductContextProviders>
  );
}

export default App;
