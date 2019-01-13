import React, { Component } from "react";
import validator from "validator";

class DataAdd extends Component {
  constructor(props) {
    super(props);
    this.props.store.data = {
      name: "",
      salary: ""
    };
  }

  addEmployee = () => {
    const name = prompt("Name:");
    if (!validator.isAlpha(name) || name.length <= 0) {
      return (this.props.store.errorMsg =
        "Name must be Alphabetical and more than 0 characters.");
    } else {
      this.props.store.errorMsg = null;
    }

    const salary = parseInt(prompt("Salary:"), 10);

    //await contactSchema.validate(contact, { abortEarly: false })

    this.props.store.pushEmployee({ name, salary });
  };

  render() {
    return (
      <div className="controls">
        <div class="field">
          <p class="control">
            <input
              type="text"
              class="input is-medium"
              name="name"
              placeholder="Name"
              onChange={this.handleChange}
            />
          </p>
        </div>
        <div class="field">
          <p class="control">
            <input
              type="text"
              class="input is-medium"
              name="salary"
              placeholder="Daily Salary"
              onChange={this.handleChange}
            />
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-medium is-info" onClick={this.addEmployee}>
              Add
            </button>
          </p>
          <p class="error">{this.props.store.errorMsg}</p>
        </div>
      </div>
    );
  }
}

export default DataAdd;
