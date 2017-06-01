import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {tweets: []};
  }

  componentWillMount() {
    fetch("/api")
      .then((res) => res.json())
      .then(tweets => this.setState({tweets}));
  }

  render() {
    return (
      <ul>
        {this.state.tweets.map(({id, user, owner, repo, languages}) => (
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
  }
}

ReactDOM.render(
  <div>
    <h1>Trending Github Languages</h1>
    <App />
  </div>,
  document.getElementById('app')
);
