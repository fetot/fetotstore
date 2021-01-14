import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import { AppFooter, HeaderNavbar } from './components';
import { Home,
    Smartphone, 
    Tablet,
    WishlistItem,
    Cart,
    Product,
    Brands,
    Login,
    Register } from './views';

function App() {
    return (
        <Router>
            <header>
                <HeaderNavbar />
            </header>
            <Switch>
                <Route path="/catalog/smartphone">
                    <Smartphone  />
                </Route>
                <Route path="/catalog/tablet">
                    <Tablet />
                </Route>
                <Route path="/product/:id">
                    <Product />
                </Route>
                <Route path="/brands">
                    <Brands />
                </Route>
                <Route path="/wishlist">
                    <WishlistItem />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <footer>
                <AppFooter />
            </footer>
        </Router>
    );
}

export default App;
