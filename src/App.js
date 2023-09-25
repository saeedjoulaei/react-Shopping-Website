import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
//context
import ProductContextProviders from "./context/ProductContextProvider";
import CardContextProvider from "./context/CardContextProvider";
//components
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <ProductContextProviders>
      <CardContextProvider>
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Store} />
          <Redirect to="/products" />
        </Switch>
      </CardContextProvider>
    </ProductContextProviders>
  );
}

export default App;
