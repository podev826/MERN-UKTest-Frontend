import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import TestsTable from "./testsTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { getTests, deleteTest } from "../../services/testService";
import { getChapters } from "../../services/chapterService";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import SearchBox from "./searchBox";

class TestAdmin extends Component {
  state = {
    tests: [],
    chapters: [],
    currentPage: 1,
    pageSize: 5,
    searchQuery: "",
    selectedChapter: null,
    sortColumn: { path: "title", order: "asc" }
  };

  async componentDidMount() {
    const { data } = await getChapters();
    const chapters = [{ _id: "", name: "All Chapters" }, ...data];

    const { data: tests } = await getTests();
    this.setState({ tests, chapters });
  }

  handleDelete = async test => {
    const originalTests = this.state.tests;
    const tests = originalTests.filter(m => m._id !== test._id);
    this.setState({ tests });

    try {
      await deleteTest(test._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This test has already been deleted.");

      this.setState({ tests: originalTests });
    }
  };

  handleLike = test => {
    const tests = [...this.state.tests];
    const index = tests.indexOf(test);
    tests[index] = { ...tests[index] };
    tests[index].liked = !tests[index].liked;
    this.setState({ tests });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleChapterSelect = chapter => {
    this.setState({ selectedChapter: chapter, searchQuery: "", currentPage: 1 });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedChapter: null, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedChapter,
      searchQuery,
      tests: allTests
    } = this.state;

    let filtered = allTests;
    if (searchQuery)
      filtered = allTests.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedChapter && selectedChapter._id)
      filtered = allTests.filter(m => m.chapter._id === selectedChapter._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const tests = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: tests };
  };

  render() {
    const { length: count } = this.state.tests;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    const { user } = this.props;

    if (count === 0) return <p>There are no tests in the database.</p>;

    const { totalCount, data: tests } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={this.state.chapters}
            selectedItem={this.state.selectedChapter}
            onItemSelect={this.handleChapterSelect}
          />
        </div>
        <div className="col">
          {user && (
            <Link
              to="/admin/tests/new"
              className="btn btn-primary"
              style={{ marginBottom: 20 }}
            >
              New Test
            </Link>
          )}
          <p>Showing {totalCount} tests in the database.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <TestsTable
            tests={tests}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default TestAdmin;
