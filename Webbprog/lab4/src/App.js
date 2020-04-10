import React from 'react';
import './App.css';
//import inventory from './inventory.ES6';
import ComposeSaladModal from './ComposeSalad';
import ViewOrder from './ViewOrder';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Salad from './Salad';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saladOrders: [],
      inventory: {}
    };
    this.addOrder = this.addOrder.bind(this);
    this.componentDidMount= this.componentDidMount.bind(this);
  }
  addOrder(salad) {
    let orders = [...this.state.saladOrders];
  orders.push(salad);
   this.setState({
     saladOrders:orders
   })
   let localStorage = window.localStorage;
   localStorage.setItem('Orders', JSON.stringify(orders))
  console.log(localStorage)
  }
  componentDidMount(){
    let orderList = JSON.parse(window.localStorage.getItem('Orders'));
    if(orderList!==null){
      orderList.map(salad=> Object.setPrototypeOf(salad, Salad.prototype));
      this.setState({
        saladOrders:orderList
      });
    }
    let inventory = {...this.state.inventory};
    fetch("http://localhost:8080/foundations/")
    .then(res => {
      return res.json()
    })
    .then(data =>{
      Promise.all(data.map(name => {
        return fetch("http://localhost:8080/foundations/" + name)
        .then(res => res.json())
        .then(function(values){
          inventory[name] = values
        });
      })) 
      .then(()=> this.setState({
        inventory:inventory
      }))
     })
    .catch( err => {
        console.log(err)
    }
    )
    fetch("http://localhost:8080/proteins/")
    .then(res => {
      return res.json()
    })
    .then(data =>{
      Promise.all(data.map(name => {
        return fetch("http://localhost:8080/proteins/" + name)
        .then(res => res.json())
        .then(function(values){
          inventory[name] = values
        });
      })) 
      .then(()=> this.setState({
        inventory:inventory
      }))
     })
    .catch( err => {
        console.log(err)
    }
    )
    fetch("http://localhost:8080/extras/")
    .then(res => {
      return res.json()
    })
    .then(data =>{
      Promise.all(data.map(name => {
        return fetch("http://localhost:8080/extras/" + name)
        .then(res => res.json())
        .then(function(values){
          inventory[name] = values
        });
      })) 
      .then(()=> this.setState({
        inventory:inventory
      }))
     })
    .catch( err => {
        console.log(err)
    }
    )   
    fetch("http://localhost:8080/dressings/")
    .then(res => {
      return res.json()
    })
    .then(data =>{
      Promise.all(data.map(name => {
        return fetch("http://localhost:8080/dressings/" + name)
        .then(res => res.json())
        .then(function(values){
          inventory[name] = values
        });
      })) 
      .then(()=> this.setState({
        inventory:inventory
      }))
     })
     
    .catch( err => {
        console.log(err)
    }
    ) 
  }

  
 
  render() {
    const composeSaladModal = (params) => <ComposeSaladModal {...params} inventory={this.state.inventory}
    parentCallBack={this.addOrder} />;
    const viewOrder = (params) => <ViewOrder {...params} inventory={this.state.inventory} 
    order={(this.state.saladOrders) } />;
    return (
      
      <div>
        <Router id="router1">
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
