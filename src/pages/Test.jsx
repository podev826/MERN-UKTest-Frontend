import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Donate from "../components/Donate";
import TestRoom from "../components/TestRoom";
import CommentBox from "../components/CommentBox";
import Ticket from "../components/Ticket";

import { getTests, getTest } from "../services/testService";
import { getComments, saveComment } from "../services/commentService";

const Test = () => {
    const params = useParams();
    const [exams, setExams] =useState([])
    const [isLoaded, setIsloaded] =useState(false)
    const [tests, setTests] =useState([])
    const [test, setTest] =useState({})
    const [comments, setComments] =useState({})
    const submit = e => {
        e.preventDefault();

        doSubmit({
            test: params.testNum, 
            parent: e.target.parent?.value,
            name: e.target.name.value,
            email: e.target.email.value,
            comment: e.target.comment.value,
         })
    }

    const doSubmit =  async (formdata) => {
        await saveComment(formdata);
        await fetchOnLoad()
        location.reload()
    };

    useEffect(() => {
        fetchOnLoad()
    }, [])
    
    const fetchOnLoad = async () => {
        let { data } = await getTests();
        let tests = data.filter(l => l.chapter && !(l.chapter.isExam))
        let { data:test } = await getTest(params.testNum)
        let { data:comments } = await getComments(params.testNum)
        console.log(comments);

        setExams(data.filter(l => l.chapter?.isExam));
        setTests(tests);
        setTest(test)
        setComments(comments)
        setIsloaded(true)
      }

    return (
        <div className="text-lg">
            <div className="bg-[#A8DADC] text-white p-2 lg:p-5">
                <h1 className="container text-2xl screen mx-auto px-5 font-bold">
                    {isLoaded && (test.chapter?.isExam ? `Life in the UK Test ${test.testNum}`: `Chapter ${test.chapter.number} - Test ${test.testNum}`) }
                </h1>
            </div>
            <div className="container flex flex-col justify-between md:flex-row 
      mx-auto text-lg px-5">
                {isLoaded && <div className="w-full md:w-3/4 mt-5">
                    {test.chapter == undefined && test.testNum == 1 &&
                        <p className="text-2xl my-5 text-center text-ukAzure">
                            Exams section available. You can access them { }
                            <a href="/exams" className="text-red-600">here</a>.
                        </p>
                    }
                    <TestRoom test={test} className="w-full" />
                    {/* <p className="text-2xl text-center my-5">All Tests</p>
                    <div className="flex flex-wrap justify-start">
                        {normalTests.map((test, index) => <Ticket
                            _id={test._id}
                            key={index}
                            className="mx-2 my-2"
                            title={"Life in the UK Test " + test.testNum}
                            to={"/tests/" + test.testNum} />)}
                    </div> */}

                    <p className="text-2xl text-center my-5">Tests by Chapter</p>
                    <div className="flex flex-wrap justify-start">
                        {tests.map((test, index) => <Ticket
                            _id={test._id}
                            key={index}
                            className="mx-2 my-2"
                            title={[test.chapter.name??("Chapter " + test.chapter.number), "Test", test.testNum].join(" ")}
                            to={["/tests", test._id].join("/")} />)}
                    </div>

                    <p className="text-2xl text-center my-5">EXAMS</p>
                    <div className="flex flex-wrap justify-start">
                        {exams.map((exam, index) => <Ticket
                            _id={exam._id}
                            key={index}
                            className="mx-2 my-2"
                            title={["British Citizenship Test", exam.testNum].join(" ")}
                            to={["/exams", exam._id].join("/")} />)}
                    </div>
                    <p className="font-bold text-xl my-5">{`${comments.length} Comments`}</p>
                    {comments.map((comment, index) => 
                        <CommentBox comment={comment} key={index} fetchOnLoad={fetchOnLoad}/>
                    )}
                    <form className="flex flex-col" onSubmit={submit}>
                        <span className="text-lg font-bold my-4">Leave A Comment</span>
                        <textarea className="w-full border mb-4 p-2" required rows={4} placeholder="Comment..." name="comment"></textarea>
                        <div className="flex justify-start">
                            <input name="name" className="min-w-20 border p-2 mr-4" type="text" required placeholder="Name (requried)"/>
                            <input name="email" className="min-w-20 border p-2" type="email" required placeholder="Email (requried)"/>
                        </div>
                        <div className="content-center">
                            <input id={`saveCredential`} name="saveCredential" type="checkbox" style={{position:"relative", opacity:1}}/>
                            <label htmlFor={`saveCredential`}> Save my name, email, and website in this browser for the next time I comment.</label>
                        </div>
                        <button type="submit" className="uppercase w-fit text-lg font-bold bg-[#A8DADC] text-white 
                        block rounded-full px-4 py-2 my-4">post comment</button>
                    </form>
                </div>}
                <div className="w-full md:w-1/3 min-w-60 md:pl-5 lg:pl-10 mt-5">
                    <Donate />
                </div>
            </div>
        </div>
    );
};

export default Test;
