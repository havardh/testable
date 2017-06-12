import React from "react";
import ReactDOM from "react-dom";

import * as service from "./service";
import List from "./list";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {tweets: []};
  }

  componentWillMount() {
    service.get()
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
