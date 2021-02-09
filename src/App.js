import React from 'react';
import Cardlist from './Cardlist';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends React.Component {
  constructor() {
    // use super() in every constructor function
    super();
    this.state = {
      robots: robots,
      searchfield: '',
    };
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
    return (
      <div className='tc'>
        <h1>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Cardlist robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
