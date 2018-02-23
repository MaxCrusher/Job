import React, { Component } from 'react';
import '../Css/Imag.css';
class Imag extends Component{
    constructor(props){
        super(props);
        this.state = {
            cl1:{
                id:0,
                text:''
            },
            cl2:{
                id:0,
                text:''
            },
            index:0
        }
    }
    Changecolor(e, id, text, index){
        ////onClick = {this.Changecolor.bind(this, this.props.id, this.props.text, this.state.index)
        //onmousedown = {this.Changecolor.bind(this ,event, this.props.id, this.props.text)} >
        this.setState({index: index+1})
        console.log(id+" "+text+ " "+ this.state.index);

    }
    render(){
        return(
            <div className = "box" onClick = {this.Changecolor.bind(this,event ,this.props.id, this.props.text, this.state.index) }>
                {this.props.text}
            </div>
        );
    }
}
export default Imag