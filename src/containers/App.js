import {robots} from '../robots';
import './App.css';
import { Component } from 'react';
import Card from '../components/card';
import Searchbox from '../components/searchbox';
import Parent from '../components/Parent';

const state={
  robots:robots,
  searchfield:  '',
}

class App extends Component {
  constructor(){
    super()
    this.state={
      robots:robots,
      searchfield:  '',

    }
  }
  onSearchChange =(event)=>{//use this syntax when you build your own functions
    this.setState({searchfield:event.target.value})
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users=>this.setState({robots:users}));
  }
  render(){
    const {robots,searchfield}=this.state
    const filterrobots = robots.filter(robot=>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return (
      <div className="App">
        <h1 className="tc">Welcome in the Robo World</h1>
    <Searchbox searchChange={this.onSearchChange}/>
    <br/>
    <Parent>
    <Card robots={filterrobots} />
    </Parent> 
      </div>
     
    );

  }
  
}

export default App;
