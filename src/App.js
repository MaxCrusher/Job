import React, { Component } from 'react';
import './App.css';
import './Css/Imag.css';
import Imag from './Components/imag';
import Table from './Components/Table';
let index=0;
let click1 = 0;
let click2 =0;
let resault=0;
let mas = {
    elem:[]
  }
class App extends Component {

    constructor(props) {
      super(props)
      this.state = {
        size: 0,
        mas:{       
            elem:[]
        }
      }
      this.updateState = this.updateState.bind(this);
    }
    updateState(id) {
        index= index+1;
        resault=0;
        if(index%2==0&&index!=0)
        {
            mas.elem.map(function(el,i){
                if(el.props.id===id)
                {
                    click2=i;
                    console.log(index+" клик"+" взят элем "+(el.props.id+1) + " на позиции"+click2);
                }
            })

            let x = mas.elem[click1];
            mas.elem[click1]=mas.elem[click2];
            mas.elem[click2]=x;
            this.setState({
                mas:{
                    elem:mas.elem
                }
            })
            setTimeout(()=> mas.elem.map(function(el,i){

                    if(i==el.props.id){
                    resault=resault+1;
                    if(resault==mas.elem.length){
                        console.log("+")
                        alert("юхууууууууууууууууууу");
                    }}
            }),300);
            
        }
        else{   
            mas.elem.map(function(el,i){
                if(el.props.id===id)
                {
                    click1=i;
                    console.log(index+" клик"+" взят элем "+(el.props.id+1) + " на позиции"+click1);
                }
            })    
        }
    }
    Change(id)
    {
        index=0;
        mas={
            elem:[]
        }
      this.setState({
        size:id
      })
      var i = 0;
      while(i<Math.pow(id,2)){//заполнение массива компонентами
        mas.elem.push(<Imag key = {i} update = {this.updateState} id = {i}/>);
        i= i+1;
      }
      function compareRandom(a, b) {//ф-я сортировки
        return Math.random() - 0.5;
      }
      mas.elem.sort(compareRandom);
      this.setState({
        mas:{
            elem:mas.elem,
        }
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
              {this.state.mas.elem.map(function(el, i){
                return <div key = {i}>{el}</div>;
              })}
          </div>
          </div>
        );
      }
}
export default App;