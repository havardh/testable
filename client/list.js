import React from "react";

const List = ({tweets}) => (
  <ul>
    {tweets.map(({id, user, owner, repo, languages}) => (
      <li key={id}>
        <span><a href={`github.com/${owner}/${repo}`}>{owner}/{repo}</a>:&nbsp;</span>
        <span>
          {Object.keys((languages || {}))
            .map((language) => (<span key={language}>{language},&nbsp;</span>))}
        </span>
      </li>
    ))}
  </ul>
);

export default List;
