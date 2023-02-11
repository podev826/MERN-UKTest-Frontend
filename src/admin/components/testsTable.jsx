import React, { Component } from "react";
import auth from "../../services/authService";
import { Link } from "react-router-dom";
import Table from "./common/table";
import Like from "./common/like";

class TestsTable extends Component {
  columns = [
    {
      path: "chapter.name",
      label: "Chapter"
    },
    { path: "testNum", label: "Number",
    content: test => <Link to={`/admin/tests/${test._id}`}>{`Test ${test.testNum}`}</Link>
    },
    { path: "timelimit", label: "Timelimit" },
    { path: "createdAt", label: "Created At" },
    {
    key: "delete",
    content: test => (
      <button
        onClick={() => this.props.onDelete(test)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    )}
  ];

  render() {
    const { tests, onSort, sortColumn } = this.props;

    return (
      <>
        <a className="btn btn-primary mb-4" href="tests/new" style={{float:"right"}}><i className="fa fa-plus"/> Add new Test</a>
        <Table
          columns={this.columns}
          data={tests}
          sortColumn={sortColumn}
          onSort={onSort}
        />
      </>
    );
  }
}

export default TestsTable;
