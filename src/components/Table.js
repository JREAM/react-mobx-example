import React, { Component } from "react";
import { observer } from "mobx-react";
import Row from "./Row";

class Table extends Component {
  render() {
    const { store } = this.props;
    return (
      <section>
        <hr />
        <table className="table is-fullwidth is-bordered is-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Daily Salary</th>
            </tr>
          </thead>
          <tbody>
            {store.employeesList.map((e, i) => (
              <Row key={i} data={e} />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>TOTAL:</td>
              <td>{store.totalSum}</td>
            </tr>
          </tfoot>
        </table>
        <div className="box">
          There are <b>{store.highEarnersCount}</b> Team Members Earning -
          <b>
            <sup>$</sup>500
          </b>
          /day or greater.
        </div>
      </section>
    );
  }
}
Table = observer(Table);

export default Table;
