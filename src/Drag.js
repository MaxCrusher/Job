import React, { Component } from 'react';
import { SortableContainer, SortableHandle, SortableElement, arrayMove } from 'react-sortable-hoc';
import SortableList from './Components/SortableList';
import './App.css';
import './Css/Imag.css';
import Imag from './Components/imag';
let mass = [];
let id = 0;
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mas:[],
      id:0
    }
    this.onSortEnd = this.onSortEnd.bind(this);
  }
  Change()
  {
    id = document.getElementById('inputtext').value;
    console.log(+document.getElementById('inputtext').value);
    this.setState({
      id:id
    })
    mass=[];
    var i = 0;
    while(i<Math.pow(id,2)){//заполнение массива компонентами
      mass.push(i);
      i= i+1;
    }
    function compareRandom(a, b) {//ф-я сортировки
      return Math.random() - 0.5;
    }
    mass.sort(compareRandom);
    this.setState({
      mas:mass
    })
  }
  onSortEnd = ({oldIndex, newIndex}) => {
  this.setState({
    mas: arrayMove(this.state.mas, oldIndex, newIndex),
  });
  }
//<button onClick ={this.Change.bind(this,)}>OK</button>
/**          <p><input type = "radio" name = "rad" onClick ={this.Change.bind(this,2)}/><label>2</label></p>
          <p><input type = "radio" name = "rad" onClick ={this.Change.bind(this,3)}/><label>3</label></p>
          <p><input type = "radio" name = "rad" onClick ={this.Change.bind(this,4)}/><label>4</label></p> */
  render() {
      return (
        <div>
          <div>
          <p>
            <input type = "text" name = "text" id='inputtext'/>
            <input type = "button" name = "but" onClick={this.Change.bind(this)}/>
          </p>
          </div>
          <SortableList mas={this.state.mas}
                        onSortEnd={this.onSortEnd.bind(this)}
                        axis='xy'
                        size = {this.state.id} />
        </div>
      );
    }
}
export default App;