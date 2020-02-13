import React from 'react';
import './App.css';
import inventory from './inventory.ES6';
import ComposeSalad from './ComposeSalad';
import ViewOrder from './ViewOrder';
import { Component } from 'react';

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
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>My Own Salad Bar</h1>
          <p>Here you can order custom made salads!</p>
        </div>
        <div class="row">
          <div class="col">
            <ComposeSalad inventory={inventory} parentCallBack={this.addOrder} />
          </div>
          <div class="col">
          <ViewOrder inventory={inventory} order={(this.state.saladOrders)}/>
          </div>

          </div>
        </div>
        );
    }
    }
    
    export default App;
