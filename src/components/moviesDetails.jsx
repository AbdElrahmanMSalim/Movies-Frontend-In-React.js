import React, { Component } from "react";

class MoviesDetails extends Component {
  handleSave = () => {
    this.props.history.push("/movies");
  };

  render() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <h1>{"Movie Form " + id}</h1>
        <button className=".btn-primary" onClick={this.handleSave}>
          Save
        </button>
      </React.Fragment>
    );
  }
}

export default MoviesDetails;
