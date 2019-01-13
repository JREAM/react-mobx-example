import { decorate, observable, configure, action, computed } from "mobx";

configure({ enforceActions: true });

class Store {
  employeesList = [
    { name: "John Doe", salary: 150 },
    { name: "Richard Roe", salary: 225 }
  ];

  clearList() {
    this.employeesList = [];
  }

  pushEmployee(e) {
    this.employeesList.push(e);
  }

  get totalSum() {
    let sum = 0;
    this.employeesList.map(e => (sum = sum + e.salary));
    return sum;
  }

  get highEarnersCount() {
    return this.employeesList.filter(e => e.salary > 500).length;
  }
}

decorate(Store, {
  employeesList: observable,
  clearList: action,
  pushEmployee: action,
  totalSum: computed
});

const appStore = new Store();
export default appStore;
export { Store };
