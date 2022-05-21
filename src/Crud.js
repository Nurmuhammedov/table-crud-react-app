import React, {Component} from 'react';

class Crud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [{
                firstName: 'Muhammadali',
                lastName: 'Nurmuhammedov',
                age: 20,
                group: '311',
                company: 'TopCoders'
            }],
            selected: -1
        }
        this.addStudent = this.addStudent.bind(this)
        this.deleteStudent = this.deleteStudent.bind(this)
        this.editStudent = this.editStudent.bind(this)
    }

    addStudent(event) {
        event.preventDefault()
        let firstName = event.target['firstName'].value.trim()
        let lastName = event.target['lastName'].value.trim()
        let age = event.target['studentAge'].value.trim()
        let group = event.target['group'].value.trim()
        let company = event.target['company'].value.trim()
        if (firstName.length !== 0 && lastName.length !== 0 && age.length !== 0 && group.length !== 0 && company.length !== 0) {
            let newStudents = this.state.students
            this.state.selected === -1 ?
                newStudents.push({firstName, lastName, age, group, company}) :
                newStudents[this.state.selected] = {firstName, lastName, age, group, company}
            event.target.reset()
            this.setState({
                students: newStudents,
                selected: -1
            })
        } else {
            alert(
                'Please! Fill the form completely'
            )
        }
    }

    deleteStudent(index) {
        let newStudents = this.state.students.filter((_, i) => index !== i)
        this.setState({
            students: newStudents
        })
    }

    editStudent(index) {
        this.form['firstName'].value = this.state.students[index].firstName
        this.form['lastName'].value = this.state.students[index].lastName
        this.form['studentAge'].value = this.state.students[index].age
        this.form['group'].value = this.state.students[index].group
        this.form['company'].value = this.state.students[index].company
        this.setState({
            selected: index
        })
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row my-4">
                        <div className="col-12 mb-4 col-md-8 offset-md-2 offset-lg-0 col-lg-4">
                            <div className="card">
                                <div className="card-header bg-dark text-center text-white">
                                    <h4>Add new student</h4>
                                </div>
                                <div className="card-body">
                                    <form
                                        ref={(myForm) => this.form = myForm}
                                        onSubmit={this.addStudent}
                                    >
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            name="firstName"
                                            className="form-control my-2"/>
                                        <input type="text"
                                               placeholder="Surname"
                                               name="lastName"
                                               className="form-control my-2"/>
                                        <input type="number"
                                               name="studentAge"
                                               placeholder="Age"
                                               className="form-control my-2"/>
                                        <input type="text"
                                               name="group"
                                               placeholder="Group"
                                               className="form-control my-2"/>
                                        <input type="text"
                                               name="company"
                                               placeholder="Company"
                                               className="form-control my-2"/>
                                        <button
                                            type="submit"
                                            className="btn btn-dark w-100 mt-4"
                                        >
                                            Add student
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div style={{padding: "0 12px"}} className="col-12 col-md-12 col-lg-8 table-responsive">
                            <table
                                style={{overflowX: "auto"}}
                                className="table table-hover table-striped">
                                <thead className="table-dark">
                                <tr>
                                    <th>№</th>
                                    <th>Name</th>
                                    <th>Surname</th>
                                    <th>Age</th>
                                    <th>Group</th>
                                    <th>Company</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                                </thead>
                                <tbody className="table-light">
                                {
                                    this.state.students.map((value, index) =>
                                        (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{value.firstName}</td>
                                                <td>{value.lastName}</td>
                                                <td>{value.age}</td>
                                                <td>{value.group}</td>
                                                <td>{value.company}</td>
                                                <td>
                                                    <button
                                                        onClick={() => this.editStudent(index)}
                                                        style={{padding: "3px 8px"}} type={"button"}
                                                        className="btn btn-warning"
                                                    >
                                                        Edit
                                                    </button>
                                                </td>
                                                <td>
                                                    <button
                                                        onClick={() => this.deleteStudent(index)}
                                                        style={{padding: "3px 8px"}} type={"button"}
                                                        className="btn btn-danger "
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Crud;