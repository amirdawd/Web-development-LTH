import React, { Component } from 'react';
import Salad from './Salad';

class ComposeSalad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foundations : [], 
            proteins :[] ,
            extras  : [], 
            dressings : [] 
        };
        
    }
    handleChangeFoundation = (event) =>
      {
        this.setState({
            foundations:event.target.value
        })
      }
    handleChangeProtein = (event)=> {
        let list = [...this.state.proteins];
        if (!event.target.checked){
            list = list.filter(name => (name !== event.target.value));
           } else {
            list.push(event.target.value);
           }
           this.setState({proteins: list});
        }
    handleChangeExtra = (event) =>{
        let list = [...this.state.extras];
        if (!event.target.checked){
            list = list.filter(name => (name !== event.target.value));
           } else {
            list.push(event.target.value);
           }
        this.setState({extras: list});
      }
    handleChangeDressing =(event)=> {
        this.setState({dressings: event.target.value});
      }
    buildSalad =()=>{
        let salad = new Salad();
        salad.addFoundation(this.state.foundations);
        this.state.proteins.map(item => salad.addProtein(item));
        this.state.extras.map(item => salad.addExtras(item));
        salad.addDressing(this.state.dressings);
        //this.salads.push(this.state.salad)
        this.clearSalad();
        return salad;
    }
    clearSalad =()=>{
        this.setState({
            foundations : [], 
            proteins :[] ,
            extras  : [], 
            dressings : []
        });
    }

    handleSubmit =(event)=>{
        var frm = document.getElementsByName('form')[0];
        frm.reset();
        this.buildSalad();
        this.props.history.push("/View-salad");
        //this.props.addOrder(this.state.foundations);
        //Sending salad object to the Parent i.e. APP
        this.props.parentCallBack(this.buildSalad());
        //alert(Object.values(this.state.salad));
        event.preventDefault();
    }

  
    render() {
        const inventory = this.props.inventory;
        let foundation = Object.keys(inventory).filter(
            name => (inventory[name].foundation)
        );
        let protein = Object.keys(inventory).filter(
            name => inventory[name].protein
        );
        let extra = Object.keys(inventory).filter(
            name => inventory[name].extra
        );
        let dressing = Object.keys(inventory).filter(
            name => inventory[name].dressing
        );
        return (
           
            <div className="container">
                <form name ='form' onSubmit={this.handleSubmit}>
                <h2>Välj bas</h2>
                    <select onChange = {this.handleChangeFoundation} required> <option value=""> -- Välj bas -- </option>
                    {foundation.map((name) =><option value={name}>  {name} +{inventory[name].price} kr</option> )}
                    </select>
                
                <h2>Välj protein</h2>
                <p>
                {protein.map(name => <ul><label>
                <input type="checkbox"
                    class="form-check-input"
                    name={this.state.name}
                    value = {name}
                    onChange = {this.handleChangeProtein}
                />
                <li key={name}>{name} + {inventory[name].price} kr </li> </label> </ul>)}
                </p>
                <h2>Välj extra</h2>
                <p>
                {extra.map(name => <ul><label>
                <input type="checkbox"
                    class="form-check-input"
                    id={name}
                    name={this.state.name}
                    value = {name}
                    onChange = {this.handleChangeExtra}
                    
                />
                <li key={name}>{name} + {inventory[name].price} kr</li> </label> </ul>)}
                </p>
                <h2>Välj dressing</h2>
                <select name={this.state.name}  onChange = {this.handleChangeDressing} required> <option value=""> -- Välj dressing -- </option>
                    {dressing.map((name) =><option value={name}>  {name} +{inventory[name].price} kr</option> )}
                </select>
                
                <input type="submit"
                  className="btn btn-secondary"
                  value="Lägg till "/>
                     
                </form>



        </div>

           
        );
    }
}
export default ComposeSalad;