import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
    // bind methods
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployeeById = this.deleteEmployeeById.bind(this);
  }
  // route to update employee page with pathvariable id
  editEmployee(id) {
    this.props.history.push(`/update-employee/${id}`);
  }
  // delete employee by id
  deleteEmployeeById(id) {
    EmployeeService.deleteById(id).then((res) => {
      //filter employees list to reduce api call
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== id
        ),
      });
    });
  }

  // fill employees array on componenet mount
  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }
  // route to add amployee page
  addEmployee() {
    this.props.history.push("/add-employee");
  }

  render() {
    return (
      <div>
        <h2 className="text-center" style={{ marginTop: "10px" }}>
          Employee List
        </h2>
        <div className="row">
          <button
            className="btn btn-primary"
            style={{ marginBottom: "10px" }}
            onClick={this.addEmployee}
          >
            Add Employee
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailAddress}</td>
                  <td>
                    <button
                      onClick={() => this.editEmployee(employee.id)}
                      className="btn btn-info"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => this.deleteEmployeeById(employee.id)}
                      className="btn btn-danger"
                      style={{ marginLeft: "10px" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;
