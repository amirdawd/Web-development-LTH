import React from 'react';
import './App.css';
import inventory from './inventory.ES6';
import ComposeSaladModal from './ComposeSalad';
import ViewOrder from './ViewOrder';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saladOrders: []
    };
    this.addOrder = this.addOrder.bind(this);
  }
  addOrder(salad) {
    let orders = [...this.state.saladOrders];
  orders.push(salad);
   this.setState({
     saladOrders:orders
   })
   alert(Object.keys(orders))
  }
  render() {
    const composeSaladModal = (params) => <ComposeSaladModal {...params} inventory={inventory}
    parentCallBack={this.addOrder} />;
    const viewOrder = (params) => <ViewOrder {...params} inventory={inventory} 
  
    order={(this.state.saladOrders)} />;
    return (
      
      <div>
        <Router>
        <div className="jumbotron text-center">
          <Link className="nav-link" to="">
          <h1>My Own Salad Bar</h1>
          </Link>
          <p>Here you can order custom made salads!</p>
        </div>
          <div>
          <ul className="nav nav-pills">
              <li className="nav-item">
              <Link className="nav-link" to="compose-salad">
              Komponera din egen sallad
              </Link>
              </li>
              <li>
              <Link className="nav-link" to="View-salad">
             View your order
              </Link>
              </li>
              </ul>
        </div>  
        <Route path="/compose-salad" render={composeSaladModal}/>
        <Route path="/View-salad" render={viewOrder}/>
        </Router>
        
        </div>
       
        );
    }
    }
    
    export default App;
