import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Donate from "../components/Donate";
import TestRoom from "../components/TestRoom";
import CommentBox from "../components/CommentBox";
import Ticket from "../components/Ticket";
const exams = [
    { _id: "asdfasdfasdf", chapter: 0, testNum: 1, type: "Exam" },
    { _id: "asdfasdfasdf", chapter: 0, testNum: 2, type: "Exam" },
    { _id: "asdfasdfasdf", chapter: 0, testNum: 3, type: "Exam" },
    { _id: "asdfasdfasdf", chapter: 0, testNum: 4, type: "Exam" },
    { _id: "asdfasdfasdf", chapter: 0, testNum: 5, type: "Exam" },
    { _id: "asdfasdfasdf", chapter: 0, testNum: 6, type: "Exam" },
    { _id: "asdfasdfasdf", chapter: 0, testNum: 7, type: "Exam" },
    { _id: "asdfasdfasdf", chapter: 0, testNum: 8, type: "Exam" },
    { _id: "asdfasdfasdf", chapter: 0, testNum: 9, type: "Exam" },
    { _id: "asdfasdfasdf", chapter: 0, testNum: 10, type: "Exam" },
]
const tests = [
    { _id: "asdfasdfqw124", chapter: 0, testNum: 1, type: "Test" },
    { _id: "asdfasdfasdf", chapter: 0, testNum: 2, type: "Test" },
    { _id: "asdfasdfasdf", chapter: 0, testNum: 3, type: "Test" },
    { _id: "asdfasdfasdf", chapter: 0, testNum: 4, type: "Test" },
    { _id: "asdfasdfasdf", chapter: 0, testNum: 5, type: "Test" },
    { _id: "asdfasdfasdf", chapter: 0, testNum: 6, type: "Test" },
    { _id: "asdfasdfasdf", chapter: 0, testNum: 7, type: "Test" },
    { _id: "asdfasdfasdf", chapter: 0, testNum: 8, type: "Test" },
    { _id: "asdfasdfasdf", chapter: 0, testNum: 9, type: "Test" },

    { _id: "asdfasdfasdf", chapter: 1, testNum: 1, type: "Test" },
    { _id: "asdfasdfasdf", chapter: 1, testNum: 2, type: "Test" },
    { _id: "asdfasdfasdf", chapter: 1, testNum: 3, type: "Test" },
    { _id: "asdfasdfasdf", chapter: 1, testNum: 4, type: "Test" },
    { _id: "asdfasdfasdf", chapter: 1, testNum: 5, type: "Test" },
    { _id: "asdfasdfasdf", chapter: 1, testNum: 6, type: "Test" },
    { _id: "asdfasdfasdf", chapter: 1, testNum: 7, type: "Test" },
    { _id: "asdfasdfasdf", chapter: 1, testNum: 8, type: "Test" },
    { _id: "asdfasdfasdf", chapter: 1, testNum: 9, type: "Test" },

    { _id: "asdfasdfasdf", chapter: 2, testNum: 1, type: "Test" },
    { _id: "asdfasdfasdf", chapter: 2, testNum: 2, type: "Test" },
    { _id: "asdfasdfasdf", chapter: 2, testNum: 3, type: "Test" },
    { _id: "asdfasdfasdf", chapter: 2, testNum: 4, type: "Test" },
    { _id: "asdfasdfasdf", chapter: 2, testNum: 5, type: "Test" },
    { _id: "asdfasdfasdf", chapter: 2, testNum: 6, type: "Test" },
    { _id: "asdfasdfasdf", chapter: 2, testNum: 7, type: "Test" },
    { _id: "asdfasdfasdf", chapter: 2, testNum: 8, type: "Test" }
]

const test = {
    _id: "asdfasdfqw124", chapter: 0, testNum: 1, type: "Test", timelimit: 45, questions: [
        {
            question: "What color is the sea?",
            choice: ["red", "blue", "green", "yellow"],
            answer: 1,
            description: "The sea is blue."
        },
        {
            question: "Where is the UK?",
            choice: ["Asia", "Africa", "Europe", "North America", "South America"],
            answer: 2,
            description: "The UK is in Europe."
        },
        {
            question: "Is the UK island?",
            choice: ["yes", "no"],
            answer: 0,
            description: "The UK is island."
        },
    ]
}

const comments = [
    {
        name: "Nadeem",
        email: "Nadeem@email.com",
        date: "February 1, 2023 at 10:52 pm",
        content: "I passed my test today. I only practiced exams 1-16. I finished my test in 2 minutes and as soon as I came out even the test centre people were shocked that i broke a record for finishing the test in just 2 minutes. It was just because of this website that I was able to finish it that quick. I really appreciate you for making this website. Many Thanks",
        comments: [
            {
                name: "Nadeem",
                email: "Nadeem@email.com",
                date: "February 1, 2023 at 10:52 pm",
                content: "I passed my test today. I only practiced exams 1-16. I finished my test in 2 minutes and as soon as I came out even the test centre people were shocked that i broke a record for finishing the test in just 2 minutes. It was just because of this website that I was able to finish it that quick. I really appreciate you for making this website. Many Thanks",
                comments: []
            },
            {
                name: "Nadeem",
                email: "Nadeem@email.com",
                date: "February 1, 2023 at 10:52 pm",
                content: "I passed my test today. I only practiced exams 1-16. I finished my test in 2 minutes and as soon as I came out even the test centre people were shocked that i broke a record for finishing the test in just 2 minutes. It was just because of this website that I was able to finish it that quick. I really appreciate you for making this website. Many Thanks",
                comments: []
            },
        ]
    },    
    {
        name: "Abbas",
        email: "Abbas@email.com",
        date: "February 4, 2023 at 7:52 pm",
        content: "Passed ALHHUMDULLILAH Today 4th February 2023 at 11:00 it only took 4 mins Best website 1 to 16 exams and little bit of from 40 tests to master it for 24/24 I have got 💯 correct answers",
        comments: []
    },
]


const Test = () => {
    const params = useParams();

    console.log(params.chapter)
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
                            _id={test._id}
                            key={index}
                            className="mx-2 my-2"
                            title={"Life in the UK Test " + test.testNum}
                            to={"/tests/" + test.testNum} />)}
                    </div>

                    <p className="text-2xl text-center my-5">Tests by Chapter</p>
                    <div className="flex flex-wrap justify-start">
                        {testsByChapters.map((test, index) => <Ticket
                            _id={test._id}
                            key={index}
                            className="mx-2 my-2"
                            title={["Chapter", test.chapter, "Test", test.testNum].join(" ")}
                            to={["/tests", test.chapter, test.testNum].join("/")} />)}
                    </div>

                    <p className="text-2xl text-center my-5">EXAMS</p>
                    <div className="flex flex-wrap justify-start">
                        {exams.map((exam, index) => <Ticket
                            _id={exam._id}
                            key={index}
                            className="mx-2 my-2"
                            title={["British Citizenship Test", exam.testNum].join(" ")}
                            to={["/exams", exam.testNum].join("/")} />)}
                    </div>
                    <p className="font-bold text-xl my-5">{`${comments.length} Comments`}</p>
                    {comments.map((comment, index) => 
                        <CommentBox comment={comment} key={comment.name} />
                    )}
                </div>
                <div className="w-full md:w-1/3 min-w-60 md:pl-5 lg:pl-10 mt-5">
                    <Donate />
                </div>
            </div>
        </div>
    );
};

export default Test;
