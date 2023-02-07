import React from "react";
import { Link, useParams } from "react-router-dom";
import CommentBox from "../components/CommentBox";
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

  const exam = {
    chapter: 0, testNum: 1, type: "Exam", timelimit: 45, questions: [
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

const test = { chapter: 0, testNum: 1, type: "Test" }
const Exam = () => {
    const params = useParams();
    const submit = () => {
        // TODO: create comment
    }
    console.log(params.chapter)
    console.log('testnum', params.testNum)
    return (
        <div className="text-lg">
            <div className="bg-[#A8DADC] text-white p-2 lg:p-5">
                <h1 className="container text-2xl screen mx-auto px-5 font-bold">
                    British Citizenship Test {params.testNum}
                </h1>
            </div>
            <div className="container flex flex-col justify-between md:flex-row 
      mx-auto text-lg px-5">
                <div className="w-full md:w-3/4 mt-5">
                    
                    <TestRoom test={exam} className="w-full" />

                    <p className="text-2xl text-center my-5">EXAMS</p>
                    <div className="flex flex-wrap justify-start">
                        {exams.map((exam, index) =><Ticket
                            _id={exam._id}
                            key={index}
                            className="mx-2 my-2"
                            title={["British Citizenship Test", exam.testNum].join(" ")}
                            to={["/exams", exam.testNum].join("/")} />)}
                    </div>
                    <p className="font-bold text-xl my-5">{`${comments.length} Comments`}</p>
                    {comments.map((comment, index) => 
                        <CommentBox comment={comment} key={index} />
                    )}
                    <form className="flex flex-col">
                        <span className="text-lg font-bold my-4">Leave A Comment</span>
                        <textarea className="w-full border mb-4 p-2" required rows={4} placeholder="Comment..." name="comment"></textarea>
                        <div className="flex justify-start">
                            <input name="name" className="min-w-20 border p-2 mr-4" type="text" required placeholder="Name (requried)"/>
                            <input name="email" className="min-w-20 border p-2" type="email" required placeholder="Email (requried)"/>
                        </div>
                        <div className="content-center">
                            <input id={`saveCredential`} name="saveCredential border" type="checkbox" style={{position:"relative", opacity:1}}/>
                            <label htmlFor={`saveCredential`}> Save my name, email, and website in this browser for the next time I comment.</label>
                        </div>
                        <button onClick={submit} className="uppercase w-fit text-lg font-bold bg-[#A8DADC] text-white 
                        block rounded-full px-4 py-2 my-4">post comment</button>
                    </form>
                </div>
                <div className="w-full md:w-1/3 min-w-60 md:pl-5 lg:pl-10 mt-5">
                    <Donate />
                </div>
            </div>
        </div>
    );
};

export default Exam;
