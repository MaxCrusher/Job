import React, { Component } from 'react';
import '../Css/Imag.css';
class Imag extends Component{
    constructor(props){
        super(props);
    }
    Changecolor(e, id, text, index){
        this.setState({index: index+1})
        console.log(id+" "+text+ " "+ this.state.index);
    }

    render(){
        return(
            <div className = 'box'  onClick = {()=>this.props.update(this.props.id)}>
            {this.props.id+1}
            </div>
        );
    }
}
export default Imag