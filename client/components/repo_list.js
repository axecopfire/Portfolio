import React from 'react';

const RepoList = (props) => {
  const RenderedRepos = props.repo.map(repo =>
    <RepoDetail key={repo.title} repo={repo} />
  );

  return (
    <ul className='media-list list-group'>
      {RenderedRepos}
    </ul>
  );
};

export default RepoList;