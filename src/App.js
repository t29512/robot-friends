import React from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import './App.css';

class App extends React.Component {
  constructor() {
    // use super() in every constructor function
    super();
    this.state = {
      robots: [],
      searchfield: '',
    };
  }

  // run after rendering (the App component mounted)
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    // use setState method to store value
    this.setState({ searchfield: event.target.value });
  };

  render() {
    // filter out robots whoes names include input value
    let filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    // show loading if haven't got file
    if (this.state.robots.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Cardlist robots={filteredRobots} />
        </div>
      );
    }
  }
}

export default App;
