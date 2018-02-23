import React, { Component } from 'react';
import './App.css';
import Imag from './Components/imag';
import Table from './Components/Table';
class App extends Component {

    state = {
      size: 0,
      mas:[]
    }//<button onClick = {this.Change}>click</button><Table size = {this.state.size}/>
    Change(id, e)
    {
      console.log(id);
      this.setState({
        size:id 
      })

      var i = Math.pow(id,2);
      console.log(i);
      let elem = [];

      while(i!=0){
        
        let random = Math.round(Math.random()*Math.pow(id,2))
        elem.push(<Imag id = {i} text = {random}/>)
        i= i-1;
      }
      this.setState({
        mas: elem.reverse()
      })
    }
    Changecolor(e, id, text){
      var targ;
      if (!e) {
        var e = window.event;
      }
      if (e.target) {
        targ=e.target;
      } else if (e.srcElement) {
        targ=e.srcElement;
      }
      var tname;
      tname = targ.tagName;
      alert("You clicked on a " + tname + " element.");
  }
  render() {
    console.log(this.state.size);
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
      <div>
        <p><input type = "radio" name = "rad" onClick ={this.Change.bind(this,2)}/><label>2</label></p>
        <p><input type = "radio" name = "rad" onClick ={this.Change.bind(this,3)}/><label>3</label></p>
        <p><input type = "radio" name = "rad" onClick ={this.Change.bind(this,4)}/><label>4</label></p>

      <div className = {style} onmousedown = {this.Changecolor.bind(event, this.props.id, this.props.text)} >
          {this.state.mas.map(function(el, i){
            console.log(mat);

            console.log((i+1)%mat)

            if((i+1)%mat==0)
            {
              return (el)
            }
            return el;
          })}
      </div>
      </div>
    );
  }
}

export default App;
