import React from "react";
import ReactDOM from "react-dom";

import List from "./list";

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
    return (<List tweets={this.state.tweets} />);
  }
}

ReactDOM.render(
  <div>
    <h1>Trending Github Languages</h1>
    <App />
  </div>,
  document.getElementById('app')
);
