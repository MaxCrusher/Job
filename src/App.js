import React, { Component } from 'react';
import './App.css';
import './Css/Imag.css';
import Imag from './Components/imag';
import Table from './Components/Table';
let mass=[];
let index = 1;
let peres = 0;
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      size: 0,
      mas:[],
      //peres: 0,
      //index: 1,
      data: 'Initial data...'
    }
    this.updateState = this.updateState.bind(this);
  }
  

  updateState(id) {
    console.log(id);
    console.log(index);
    if(index%2===0)
    {
      let x = null;
      x=this.state.mas[peres];
      this.state.mas[peres]=this.state.mas[mass.indexOf(id)];
      this.state.mas[mass.indexOf(id)]=x;
      let y = null;
      y=mass[peres];
      mass[peres]=mass[mass.indexOf(id)];
      mass[mass.indexOf(id)]=y;//перестановка*/
      this.setState({
        data: `Data updated from ${id}`
        //peres:0,
        //index:this.state.index+1
      })
      peres = 0;
      index = index+1;
      console.log("+")
    }
    else{
    this.setState({
      data: `Data updated from ${id+" "+this.state.mas.indexOf(id)}`

    })
    peres=mass.indexOf(id);
    index=index+1;
  }
  console.log(peres+"первое нажатие")
  }
   
    Change(id)
    {
      console.log(id);
      this.setState({
        size:id,
        index:0
      })

      var i = Math.pow(id,2)-1;
      console.log(i);
      let elem = [];

      while(i>=0){
        
        elem.push(<Imag update = {this.updateState} id = {i} text = {i}/>);
        mass.push(i);
        i= i-1;
      }
      function compareRandom(a, b) {
        return Math.random() - 0.5;
      }
      elem=elem.reverse();
      mass= mass.reverse();
      //elem.sort(compareRandom);
      this.setState({
        mas: elem
      })
    }
  render() {
    let mat = this.state.size;
    let style = '';
    if(mat==2){
      style = 'block2';
    }
    if(mat==3){
      style = 'block3'
    }
    if(mat==4){
      style = 'block4';
    }
    return (
      <div >
        <div>{this.state.data}</div>
        <div>
        <p><input type = "radio" name = "rad" onClick ={this.Change.bind(this,2)}/><label>2</label></p>
        <p><input type = "radio" name = "rad" onClick ={this.Change.bind(this,3)}/><label>3</label></p>
        <p><input type = "radio" name = "rad" onClick ={this.Change.bind(this,4)}/><label>4</label></p>
        </div>
      <div className = {style}>
          {this.state.mas.map(function(el, i){
            console.log("mas id ="+i+"=>")
            return <div key = {i}>{el}</div>;
          })}
      </div>
      </div>
    );
  }
}

export default App;
