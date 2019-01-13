import React, { Component } from "react";
import Table from "./components/Table";
import DataAdd from "./components/DataAdd";
import DataClear from "./components/DataClear";
import appStore from "./stores/AppStore.js";

class App extends Component {
  render() {
    return (
      <section class="section">
        <div class="content">
          <div class="tile is-ancestor">
            <div class="tile is-vertical is-12">
              <div class="tile">
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child notification is-primary">
                    <p class="title">Add to List</p>
                    <DataAdd store={appStore} />
                    <p>TODO: Fix the input</p>
                  </article>
                  <article class="tile is-child notification is-warning">
                    <p class="title">Clear Data</p>
                    <DataClear store={appStore} />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child notification is-info">
                    <p class="title">Employee Table</p>
                    <Table store={appStore} />
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
