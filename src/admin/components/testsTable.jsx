import React, { Component } from "react";
import auth from "../services/authService";
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
    // { path: "updatedAt", label: "Updated At" },
    {
      key: "like",
      content: test => (
        <Like liked={test.liked} onClick={() => this.props.onLike(test)} />
      )
    }
  ];

  deleteColumn = {
    key: "delete",
    content: test => (
      <button
        onClick={() => this.props.onDelete(test)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    )
  };

  constructor() {
    super();
    const user = auth.getCurrentUser();
    if (user && user.isAdmin) this.columns.push(this.deleteColumn);
  }

  render() {
    const { tests, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={tests}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default TestsTable;
