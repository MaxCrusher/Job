import React, { Component } from 'react';

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data: 'Initial data...',
        mas:[0,1,2,3]
      }
      this.updateState = this.updateState.bind(this);
    }
  
    updateState(who) {
      this.setState({data: `Data updated from ${who}`})
    }
    
    render() {
      return (
          <div>
        <div>
          Parent: {this.state.data}
          <Child update={this.updateState}/>
        </div>
        <div>
        {
                this.state.mas.map(function(el){
                    return <div key = {el}><Child update={this.updateState}/></div>
                })
            }
        </div>
        </div>
      )
    }
  }
export default App
  class Child extends React.Component {
    render() {
      return (
        <div>
          Child component
          <button onClick={() => this.props.update('child')}>
            CLICK
          </button>
          <GrandChild update={this.props.update}/>
        </div>
      );
    }
}
  class GrandChild extends React.Component {
    render() {
      return (
        <div>
          Grand child component
          <button onClick={() => this.props.update('grand child')}>
            CLICK
          </button>
        </div>
      );
    }
  }
