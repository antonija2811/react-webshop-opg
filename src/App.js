import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './components/Home/Home';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Default from './components/Default';
import NavBar from './components/NavBar';
import Details from './components/Details';
import Contact from './components/Contact';
import Modal from './components/Modal';


class App extends Component {
  render() {
    return (
      <div style={{
        width: '80vw',
        height: '100%',
      }}>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/productlist" component={ProductList}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Modal/>


      </div>
    );
  }
}
export default App;
