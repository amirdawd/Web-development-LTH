import React, { Component } from 'react'; 


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
      <table class="table">
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
          <td> {foundation}</td>
          <td> {protein}</td>
          <td> {extra}</td>
          <td> {dressing}</td>
         <td> {price}</td>
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