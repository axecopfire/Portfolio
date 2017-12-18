import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RepoList from './components/repo_list';

class App extends Component {
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