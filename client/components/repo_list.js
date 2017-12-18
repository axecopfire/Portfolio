import React from 'react';
import RepoDetail from './repo_detail';

const Repos = [
  { title: 'Pthw', link: 'https://github.com/axecopfire/Pthw' },
  { title: 'AndyJ-PCard', link: 'https://github.com/axecopfire/AndyJ-PCard'},
  { title: 'VWC-Projects', link: 'https://github.com/axecopfire/VWC-Projects'}
];

const RepoList = () => {
  const RenderedRepos = Repos.map(function(repo) {
    return <RepoDetail />
  });

  return (
    <ul>
      {RenderedRepos}
    </ul>
  );
};

export default RepoList;