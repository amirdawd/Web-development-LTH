import React, { Component } from 'react'; 
//import shortid from "shortid";
class ViewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderList:[]
    }
    this.postOrder = this.postOrder.bind(this);
  }

async postOrder(salad){
    fetch('http://localhost:8080/orders/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
        crossdomain:true,
        method: 'POST',
        body: JSON.stringify(salad)
    })
    .then(response => response.json() )
    .then(
      data => {
        console.log(data) 
        let list =[...this.state.orderList]
        list.push(data)
        this.setState({
          orderList:list
        })
      }
      )
    .catch(err => console.log(err))
  }

    render() {
      let salad = (this.props.order);
      let foundation = salad.map((id) => id.foundation);
      let protein = salad.map((id) => id.protein);
      let extra = salad.map((id) => id.extra);
      let dressing = salad.map((id) => id.dressing);
      let price = salad.map((id) => id.price(this.props.inventory));
      return (
      <div className="container">
      <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Foundation</th>
              <th scope="col">Protein</th>
              <th scope="col">Dressing</th>
              <th scope="col">Extras</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
         {salad.map((id,e)=> 
          <tr> <th scope="row">{e}</th> 
          <td> {foundation[e]}</td>
          <td> {protein[e]}</td>
          <td> {extra[e]}</td>
          <td> {dressing[e]}</td>
         <td> <p className="price">{price[e]} SEK</p></td>
          </tr>
         )}
          </tbody>
      </table>
      <button className="btn btn-primary" onClick={()=> this.postOrder(salad)}>Skapa  beställning</button>
      </div>

       
      )
    }
}

export default ViewOrder;