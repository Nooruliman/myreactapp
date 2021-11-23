import { Component } from 'react';
import Searchbox from './searchbox';
class Hello extends Component {
    render(){
      return (
        
        <div className="hello bg-light-yellow">
          <h1 className="tc">Welcome in the Robo World</h1>
          <Searchbox/>
         <div className="tc"><img height="170px" width="170px" alt="" className="bg-light-blue tc grow bw-2 shadow-5" src={`${this.props.robots}`}></img></div>
        </div>
      );
    }
    
  }
  
  export default Hello;