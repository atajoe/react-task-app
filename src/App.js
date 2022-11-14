import Overview from './components/Overview';
import './App.css';
import React from 'react';




class App extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      tasksList : [],
      task: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({
      tasksList: [...this.state.tasksList,this.state.task]
    }, () => console.log('Form submitted. Here are the list of tasks :): ', this.state.tasksList) )
  }

  handleChange = (event) => {
    this.setState({task: event.target.value}, () => {
        console.log('Here is the message now from state now from handleChange func: ', this.state.task)
      })
      return 
  }
  render(){
    return (
      <div className="App">
        <h1>Hello from class app component!</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
          id="input-field"
          type="text"
          value = {this.state.task}
          onChange= {this.handleChange}
          />
          <button type="Submit">App Form Button</button>
          <Overview message={this.state.tasksList}/>
        </form>
      </div>
    )
  }
}

export default App;
