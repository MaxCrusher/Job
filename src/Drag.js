import React, { Component } from 'react';
import { SortableContainer, SortableHandle, SortableElement, arrayMove } from 'react-sortable-hoc';
import './App.css';
import './Css/Imag.css';
import Imag from './Components/imag';
let mass = [];
let Size= 0;
let id = 0;
const SortableItem = SortableElement(({value}) =>
  <div className = 'box'>{value+1}</div>
);

const SortableList = SortableContainer(({mas}) => {
  let style = '';
  if(Size==2){
    style = 'block2';
  }
  if(Size==3){
    style = 'block3'
  }
  if(Size==4){
    style = 'block4';
  }
  function Cool(value, index){
    if(value===index){
      id++;
      if(id===Math.pow(Size,2))
      {
        setTimeout(()=>{id=0;alert("Дааааааааааааа!!!!!")},400);
      }
    }
    else id=0;
    console.log(id);
  }
  id = 0;
  return (
    <div className = {style}>
      {mas.map((value, index) => (
        Cool(value, index),
        <SortableItem key={index} index={index} value={value} />
      ))}
    </div>
  );
});

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mas:[]
    }
    this.onSortEnd = this.onSortEnd.bind(this);
  }
  Change(id)
  {
    Size =id;
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

  render() {
      return (
        <div>
          <div>
          <p><input type = "radio" name = "rad" onClick ={this.Change.bind(this,2)}/><label>2</label></p>
          <p><input type = "radio" name = "rad" onClick ={this.Change.bind(this,3)}/><label>3</label></p>
          <p><input type = "radio" name = "rad" onClick ={this.Change.bind(this,4)}/><label>4</label></p>
          </div>
          <SortableList mas={this.state.mas}
                        onSortEnd={this.onSortEnd.bind(this)}
                        axis='xy' />
        </div>
      );
    }
}
export default App;