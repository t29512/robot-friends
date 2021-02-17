import React from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

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
    const { robots, searchfield } = this.state;
    // filter out robots whoes names include input value
    let filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    // show loading if haven't got file yet
    return !robots.length ? (
      <h1 className='tc f1'>Loading...</h1>
    ) : (
      <div className='tc'>
        <h1 className='f1'>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <Cardlist robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
