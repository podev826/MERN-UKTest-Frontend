import React from "react";
import { Link, useParams } from "react-router-dom";
import Donate from "../components/Donate";
import TestRoom from "../components/TestRoom";
import Ticket from "../components/Ticket";
const exams = [
    { chapter: 0, testNum: 1, type: "Exam" },
    { chapter: 0, testNum: 2, type: "Exam" },
    { chapter: 0, testNum: 3, type: "Exam" },
    { chapter: 0, testNum: 4, type: "Exam" },
    { chapter: 0, testNum: 5, type: "Exam" },
    { chapter: 0, testNum: 6, type: "Exam" },
    { chapter: 0, testNum: 7, type: "Exam" },
    { chapter: 0, testNum: 8, type: "Exam" },
    { chapter: 0, testNum: 9, type: "Exam" },
    { chapter: 0, testNum: 10, type: "Exam" },
]
const tests = [
    { chapter: 0, testNum: 1, type: "Test" },
    { chapter: 0, testNum: 2, type: "Test" },
    { chapter: 0, testNum: 3, type: "Test" },
    { chapter: 0, testNum: 4, type: "Test" },
    { chapter: 0, testNum: 5, type: "Test" },
    { chapter: 0, testNum: 6, type: "Test" },
    { chapter: 0, testNum: 7, type: "Test" },
    { chapter: 0, testNum: 8, type: "Test" },
    { chapter: 0, testNum: 9, type: "Test" },

    { chapter: 1, testNum: 1, type: "Test" },
    { chapter: 1, testNum: 2, type: "Test" },
    { chapter: 1, testNum: 3, type: "Test" },
    { chapter: 1, testNum: 4, type: "Test" },
    { chapter: 1, testNum: 5, type: "Test" },
    { chapter: 1, testNum: 6, type: "Test" },
    { chapter: 1, testNum: 7, type: "Test" },
    { chapter: 1, testNum: 8, type: "Test" },
    { chapter: 1, testNum: 9, type: "Test" },

    { chapter: 2, testNum: 1, type: "Test" },
    { chapter: 2, testNum: 2, type: "Test" },
    { chapter: 2, testNum: 3, type: "Test" },
    { chapter: 2, testNum: 4, type: "Test" },
    { chapter: 2, testNum: 5, type: "Test" },
    { chapter: 2, testNum: 6, type: "Test" },
    { chapter: 2, testNum: 7, type: "Test" },
    { chapter: 2, testNum: 8, type: "Test" }
]

const test = {
    chapter: 0, testNum: 1, type: "Test", timelimit: 45, questions: [
        {
            question: "What color is the sea?",
            choices: ["red", "blue", "green", "yello"],
            answer: 1,
            description: "The sea is blue."
        },
        {
            question: "Where is the UK?",
            choices: ["Asia", "Africa", "Europe", "North America", "South America"],
            answer: 2,
            description: "The UK is in Europe."
        },
        {
            question: "Is the UK island?",
            choices: ["yes", "no"],
            answer: 0,
            description: "The UK is island."
        },
    ]
}
const Test = () => {
    const params = useParams();
    console.log(params.chapter)
    console.log('testnum', params.testNum)
    const normalTests = tests.filter(item => (item.chapter == 0 || item.chapter == undefined));
    const testsByChapters = tests.filter(item => item.chapter != 0);
    return (
        <div className="text-lg">
            <div className="bg-[#A8DADC] text-white p-2 lg:p-5">
                <h1 className="container text-2xl screen mx-auto px-5 font-bold">
                    {params.chapter ? `Chapter ${params.chapter} Test ${params.testNum}` : `Life in the UK Test ${params.testNum}`}
                </h1>
            </div>
            <div className="container flex flex-col justify-between md:flex-row 
      mx-auto text-lg px-5">
                <div className="w-full md:w-3/4 mt-5">
                    {test.chapter == undefined && test.testNum == 1 &&
                        <p className="text-2xl my-5 text-center text-ukAzure">
                            Exams section available. You can access them { }
                            <a href="/exams" className="text-red-600">here</a>.
                        </p>
                    }
                    <TestRoom test={test} className="w-full" />
                    <p className="text-2xl text-center my-5">All Tests</p>
                    <div className="flex flex-wrap justify-start">
                        {normalTests.map((test, index) => <Ticket
                            key={index}
                            className="mx-2 my-2"
                            title={"Life in the UK Test " + test.testNum}
                            to={"/tests/" + test.testNum} />)}
                    </div>

                    <p className="text-2xl text-center my-5">Tests by Chapter</p>
                    <div className="flex flex-wrap justify-start">
                        {testsByChapters.map((test, index) => <Ticket
                            key={index}
                            className="mx-2 my-2"
                            title={["Chapter", test.chapter, "Test", test.testNum].join(" ")}
                            to={["/tests", test.chapter, test.testNum].join("/")} />)}
                    </div>

                    <p className="text-2xl text-center my-5">EXAMS</p>
                    <div className="flex flex-wrap justify-start">
                        {exams.map((exam, index) => <Ticket
                            key={index}
                            className="mx-2 my-2"
                            title={["British Citizenship Test", test.testNum].join(" ")}
                            to={["/exams", test.testNum].join("/")} />)}
                    </div>

                </div>
                <div className="w-full md:w-1/3 min-w-60 md:pl-5 lg:pl-10 mt-5">
                    <Donate />
                </div>
            </div>
        </div>
    );
};

export default Test;
