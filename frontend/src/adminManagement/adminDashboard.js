import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class AdminDashboard extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <div style={{ marginTop: 20 }}>
              <center>
                <div className="card mb-3" style={{ width: "700px" }}>
                  <div style={{ width: "700px" }}>
                    <div className="card-header">
                      <b>
                        <h3> Admin Dashbord </h3>
                      </b>{" "}
                    </div>{" "}
                    <div className="çard-body" />{" "}
                  </div>{" "}
                </div>{" "}
              </center>{" "}
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default AdminDashboard;
