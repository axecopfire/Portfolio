import React from 'react';
import RepoDetail from './repo_detail';

const Repos = [
  { title: 'Pthw', url: 'https://github.com/axecopfire/Pthw' },
  { title: 'AndyJ-PCard', url: 'https://github.com/axecopfire/AndyJ-PCard'},
  { title: 'VWC-Projects', url: 'https://github.com/axecopfire/VWC-Projects'}
];

const RepoList = () => {
  const RenderedRepos = Repos.map(repo => {
    return <RepoDetail key={repo.title} repo={repo} />
  });

  return (
    <ul className="media-list list-group">
      {RenderedRepos}
    </ul>
  );
};

export default RepoList;