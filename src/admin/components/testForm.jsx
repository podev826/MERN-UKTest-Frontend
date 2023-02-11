import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getTest, saveTest, deleteQuestion } from "../../services/testService";
import { getChapters } from "../../services/chapterService";
import { useLocation, useParams } from "react-router-dom";

const withRouter = WrappedComponent => props => {
  const params = useParams();
  const history = useLocation().history;
  // etc... other react-router-dom v6 hooks

  return (
    <WrappedComponent
      {...props}
      params={params}
      history={history}
      // etc...
    />
  );
};

class TestForm extends Form {
  state = {
    data: {
      testNum: "",
      timelimit: "",
    },
    chapters: [],
    questions: [],
    errors: {}
  };
  
  schema = {
    _id: Joi.string(),
    testNum: Joi.number().required().label("Test Number"),
    timelimit: Joi.number().required().label("Time Limit"),
    chapterId: Joi.string().allow(null, '').label("Chapter"),
  };

  async populateChapters() {
    const { data: chapters } = await getChapters();
    this.setState({ chapters });
  }

  async populateTest() {
    try {      
      const testId = this.props.params.id
      if (testId === "new") return;

      const { data: test } = await getTest(testId);
      this.setState({ data: this.mapToViewModel(test) });
      this.setState({ questions: test.questions});
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateChapters();
    await this.populateTest();
  }

  mapToViewModel(test) {
    return {
      _id: test._id,
      testNum: test.testNum,
      timelimit: test.timelimit,
      chapterId: test.chapter?._id
    };
  }

  doSubmit = async () => {
    await saveTest(this.state.data);
    window.location.href = "/admin/tests"
  };

  deleteQuestion = async (id) => {
    await deleteQuestion(this.props.params.id, id)
    window.location.href = "/admin/tests/" + this.props.params.id
  }

  render() {
    return (
      <div>
        <h1>Test {this.state.data.testNum}</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("testNum", "Test Number", "number")}
          {this.renderSelect("chapterId", "Chapter", this.state.chapters)}
          {this.renderInput("timelimit", "Time Limit", "number")}
          {this.renderButton("Save")}
        </form>
        {this.props.params.id!="new"&&
        <div>
          <hr/>
          <a href={`${this.props.params.id}/new`} style={{float:"right"}}>Add new question</a>
          <h1>Questions</h1>
          <div style={{clear: "both"}}></div>
          <div>
            {this.state.questions.map((q, index) => <div style={{borderRadius:20, marginBottom:10, padding:10, backgroundColor: "#eeeeee"}} key={`question${index}`}>
              <div style={{float:"right"}}>
                <a className="btn btn-warning" href={`${this.props.params.id}/${q._id}`}><i className="fa fa-edit text-white"/></a> &nbsp; 
                <a className="btn btn-danger" onClick={()=>this.deleteQuestion(q._id)}><i className="fa fa-remove text-white"/></a>
              </div>
              <h3>Question {index + 1} </h3>

              <span>Question: {q.question}</span><br/>
              <span>Audio:<a href={`${q.audioPath}`}>{q.audioPath}</a></span>
              <ul style={{listStyle: "disc", paddingLeft:20}} >
                {q.choices.map((c, index) => 
                  <li key={`key${index}`}>{c} {q.answer==index&&"(correct)"}</li>
                )}
              </ul>
              <span>Description: {q.description}</span>
            </div>)}
          </div>
        </div>}
      </div>
    );
  }
}

export default withRouter(TestForm);
