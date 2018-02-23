import React, { Component } from 'react';
import '../App.css';

class Table extends Component{
  constructor(props){
    super(props);
    this.state = {
        rows: this.props.size,
        el: this.props.size
    };
  }
    render(){
        let table = null;
        let row = this.props.size;
        let elem = this.props.size
        while(row=!0)
        {
            table =+ "1"; 
            while(elem=!0)
            {
                table =+elem;
                elem--;                
            }
            row--;
        
        }
        {console.log(table)}
        return(
            <div>
                {console.log(this.props.size)}
                <table cols = {this.props.size} width = {300} height = {300}>

                </table>
            </div>
        );
    }
}
export default Table;