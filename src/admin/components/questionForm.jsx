import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getTest } from "../../services/testService";
import { saveQuestion, upload } from "../../services/questionService";
import { useLocation, useParams } from "react-router-dom";
import Input from "./common/input";

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

class QuestionForm extends Form {
  state = {
    data: {
      question:"",
      choices:"",
      audioPath:"",
      answer: "",
      description: ""
    },
    test: {},
    question: {},
    errors: {},
    audioFile: undefined
  };
  
  schema = {
    _id: Joi.string(),
    question: Joi.string().required().label("Question"),
    audioPath: Joi.string().allow("").label("Audio"),
    choices: Joi.string().required().label("Choices"),
    answer: Joi.number().min(0).label("Answer"),
    description: Joi.string().label("Description")
  };

  async populateTest() {
    try {      
      const testId = this.props.params.testId
      const questionId = this.props.params.questionId
      
      const { data:test } = await getTest(testId)
      test.chapterId = test.chapter?._id
      delete test.chapter
      delete test.createdAt
      delete test.updatedAt
      this.setState({ test: test });
      
      if (questionId === "new") return;
      console.log('state', this.state)

      const question = test.questions.find(q => q._id==questionId)
      this.setState({ data: this.mapToViewModel(question)})
      this.setState({ question: question});
      console.log('state', this.state)
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/admin/not-found");
    }
  }

  mapToViewModel(question) {
    return {
      _id: question._id,
      question: question.question,
      choices: question.choices.join(","),
      audioPath: question.audioPath,
      answer: question.answer,
      description: question.description,
    };
  }

  async componentDidMount() {
    await this.populateTest();
  }


  doSubmit = async () => {
    let choices = this.state.data.choices.split(",")
    let question = this.state.data
    question.choices =choices
    delete question._id

    if(this.state.audioFile){
      const body = new FormData();
      body.append("file", this.state.audioFile[0]);

      question.audioPath = (await upload(body)).data;
    }
    // let test = this.state.test;
    // if(this.props.params.questionId=="new")
    //   test.questions.push(question)
    // else {
    //   let i = test.questions.findIndex(q => q._id==this.props.params.questionId)
    //   test.questions[i] = this.state.data
    //   test.questions[i].choices = choices  
    // }
    await saveQuestion(this.props.params.testId, this.props.params.questionId, question);
    window.location.href = "/admin/tests/" + this.props.params.testId
  };

  render() {
    return (
      <div>
        <h1>Test {this.state.data.testNum} / {this.state.question.question }</h1>
        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
          {this.renderInput("question", "Question", "text")}
          {this.renderInput("choices", "Choices", "text")}
          {this.renderInput("answer", "Answer", "number")}
          {this.renderInput("description", "Description", "text")}
          <Input
            type={"file"}
            name={"audioPath"}
            label={"Audio"}
            onChange={e=> this.setState({audioFile: e.target.files})}
            error={this.state.errors["audioFile"]}
          />
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default withRouter(QuestionForm);
