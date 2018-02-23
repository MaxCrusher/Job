import React, { Component } from 'react';
import '../Css/Imag.css';
class Imag extends Component{
    constructor(props){
        super(props);
    }
    Changecolor(id, text){
        console.log(id+" "+text)
    }
    render(){
        return(
            <div className = "box" onClick = {this.Changecolor.bind(this, this.props.id, this.props.text)}>
                {this.props.text}
            </div>
        );
    }
}
export default Imag