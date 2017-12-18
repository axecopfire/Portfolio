import React from 'react';
import RepoDetail from './repo_detail';

/*const Repos = [
  { title: 'Pthw', url: 'https://github.com/axecopfire/Pthw' },
  { title: 'AndyJ-PCard', url: 'https://github.com/axecopfire/AndyJ-PCard'},
  { title: 'VWC-Projects', url: 'https://github.com/axecopfire/VWC-Projects'}
];*/

const RepoList = (props) => {
  const RenderedRepos = props.repos.map(repo =>
    <RepoDetail key={repo.name} repo={repo} />
  );

  return (
    <ul className="media-list list-group">
      {RenderedRepos}
    </ul>
  );
};

export default RepoList;