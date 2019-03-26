import React, { Component } from 'react';

import './App.css';
import dummyData from'./dummy-data'
import SearchHeader from './components/SearchBar/SearchHeader';
import Post from './components/PostContainer/Post';

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      profile : dummyData
    };

  }

  render() {
    return (
      <div className="App">
        <SearchHeader />
        <Post profile={this.state.profile} />
      </div>
    );
  }
}

export default App;
