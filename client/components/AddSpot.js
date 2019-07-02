import React, { Component } from 'react';

export default class AddSpot extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
    this.handleKey = this.handleKey.bind(this);
  }

  handleKey(evt) {
    if (evt.key === 'Enter') {
      this.props.add(this.state.input);
      this.setState({ input: '' });
    }
  }

  addSpot(input) {
    this.setState({ input });
  }

  render() {
    return (
      <div className="add-spot">
        <input
          type="text"
          value={this.state.input}
          onChange={evt => this.setState({ input: evt.target.value })}
          onKeyDown={this.handleKey}
        />
        <button
          onClick={() => {
            this.addSpot(this.state.input);
            this.setState({ input: '' });
          }}
        >
          Add Spot
        </button>
      </div>
    );
  }
}
