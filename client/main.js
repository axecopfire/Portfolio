import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import RepoList from './components/repo_list';

class App extends Component {
  componentWillMount() {
    axios.get('https://api.github.com/users/axecopfire/repos')
    .then(response => console.log(response));
  }
  render() {
    return (
      <div>
        <RepoList />
      </div>
    );
  }
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));

});