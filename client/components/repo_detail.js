import React from 'react';

const RepoDetail = (props) => {
    return (
        <li>
            <a href={props.repo.url}>{props.repo.title}</a>
        </li>
    );
};

export default RepoDetail;