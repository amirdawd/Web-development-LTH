import React, { Component } from 'react'; 
//import shortid from "shortid";
class ViewOrder extends Component {

 

    render() {
      let salad = (this.props.order);
      let foundation = salad.map((id) => id.foundation);
      console.log(foundation);
      let protein = salad.map((id) => id.protein);
      let extra = salad.map((id) => id.extra);
      let dressing = salad.map((id) => id.dressing);
      let price = salad.map((id) => id.price());
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
      <button className="btn btn-primary" >Skapa  beställning</button>
      </div>
      )
    }
}

export default ViewOrder;