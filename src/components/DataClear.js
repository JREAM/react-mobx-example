import React, { Component } from "react";

class DataClear extends Component {
  clearList = () => {
    this.props.store.clearList();
  };

  render() {
    return (
      <div className="controls">
        <button
          class="button is-medium is-outlined is-danger"
          onClick={this.clearList}
        >
          Clear
        </button>
      </div>
    );
  }
}

export default DataClear;
