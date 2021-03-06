import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import StudentUpdate from "./StudentUpdate";
import StudentList from "./StudentList";
import StudentDelete from "./StudentDelete";
import StudentSignup from "./StudentSignUp";
import StudentDashboard from "./StudentDashboard";

class Students extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand"
                           href="http://courseweb.sliit.lk/"
                           target="_blank"
                        >
                        </a>

                        <Link to="/studentlist" className="navbar-brand">
                            Student Management
                        </Link>

                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/studentlist" className="nav-link">
                                        Manage Student
                                    </Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/addstudent" className="nav-link">
                                        Add Student
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </nav>

                    <Route path="/studentlist" exact component={StudentList}/>
                    <Route path="/update/:id" component={StudentUpdate}/>
                    <Route path="/delete/:id" component={StudentDelete}/>
                    <Route path="/studentsignup" component={StudentSignup}/>
                    <Route path="/studentdashboard" component={StudentDashboard}/>
                </div>
            </Router>
        );
    }
}

export default Students;
