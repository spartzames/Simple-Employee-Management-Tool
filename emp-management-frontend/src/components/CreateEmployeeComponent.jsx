import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

export default class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
    };

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
    this.cancelSave = this.cancelSave.bind(this);
  }

  saveEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailAddress: this.state.emailAddress,
    };
    console.log("Employe:" + JSON.stringify(employee));
    EmployeeService.addEmployee(employee).then((res) => {
      this.props.history.push("/employees");
    });
  };

  cancelSave() {
    this.props.history.push("/employees");
  }

  changeFirstNameHandler(event) {
    this.setState({ firstName: event.target.value });
  }

  changeLastNameHandler(event) {
    this.setState({ lastName: event.target.value });
  }

  changeEmailHandler(event) {
    this.setState({ emailAddress: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Employee</h3>
              <form>
                <div className="form-group">
                  <label>First Name:</label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={this.state.firstName}
                    onChange={this.changeFirstNameHandler}
                  />

                  <label>Last Name:</label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={this.state.lastName}
                    onChange={this.changeLastNameHandler}
                  />

                  <label>Email Address:</label>
                  <input
                    placeholder="Email Address"
                    name="emailAddress"
                    className="form-control"
                    value={this.state.emailAddress}
                    onChange={this.changeEmailHandler}
                  />
                </div>
                <button className="btn btn-success" onClick={this.saveEmployee}>
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={this.cancelSave}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
