import { AiFillFacebook, AiFillTwitterCircle, AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineWhatsApp } from "react-icons/ai";
import { useEffect, useState } from "react";
import QuestionBox from "./QuestionBox";

const START = 0;
const MIDDLE = 1;
const END = 2;
const currentUrl = window.location.href;

Number.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    return hours + ':' + minutes + ':' + seconds;
}

export default function TestRoom(props) {
    const [status, setStatus] = useState(START);
    const [time, setTime] = useState(props.test.timelimit * 60)
    const [mark, setMark] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [questions, setQuestions] = useState(props.test.questions)
    const [showReview, setShowReview] = useState(false)
    const [average, setAverage] = useState(0)

    const toggleReview = () => {
        setShowReview(!showReview)
    }

    let correctCount = questions.filter(q => q.answer==q.selected).length
    let passed = (correctCount / questions.length) > 0.5

    useEffect(()=>{
        console.log('index changed to', currentIndex)
        if(status==MIDDLE){
            setTimeout(() => {
                if (time == 0) setStatus(END)
                else setTime(time - 1)
            }, 1000)        
        }
    })
    useEffect(()=>{
        if(status==END) {
            setMark(Math.floor(correctCount * 10000 / questions.length)/100)
            let testStatus = JSON.parse(localStorage.getItem('testStatus'))??{}
            console.log(testStatus)
            if(testStatus && testStatus[props.test._id]) {
                let old = testStatus[props.test._id]
                setAverage(old.average)
                old.testCount++
                old.average = (old.average * (old.testCount - 1) + mark) /old.testCount
                old.passed = passed
                old.correctCount = correctCount
                testStatus[props.test._id] = old
                localStorage.setItem('testStatus', JSON.stringify(testStatus))   
            }
            else {
                testStatus[props.test._id] = {
                    testCount: 1,
                    average: Math.floor(correctCount * 10000 / questions.length) /100,
                    passed,
                    correctCount,
                    total: questions.length  
                }
                localStorage.setItem('testStatus', JSON.stringify(testStatus))
            }
        }
    }, [status])
    return (
        <div>
            {status == START && (
                <div className="flex flex-col">
                    <span className="text-xl mb-4">{props.test.type + props.test.testNum}</span>
                    <button className="bg-sky-900 rounded-lg text-white w-fit px-3" onClick={e => setStatus(MIDDLE)}>Start quiz</button>
                </div>
            )}
            {status == MIDDLE && (
                <div className="flex flex-col">
                    <span className="text-xl font-bold my-3">Time Limit: {time.toHHMMSS()}</span>
                    <div className="h-2 bg-blue-700 mb-3" style={{ width: `${time * 100 / props.test.timelimit / 60}%` }}></div>
                    <QuestionBox 
                        questions={questions} 
                        index={currentIndex} 
                        status={status}
                        updateQuestions={setQuestions} 
                        setIndex={setCurrentIndex} 
                        setStatus={setStatus}/>
                </div>
            )}
            {status == END && (
                <div className="flex flex-col">
                    <span className="text-2xl font-bold my-3">Result</span>
                    <p className="text-base mb-5">{`${correctCount} of ${questions.length} questions answered correctly`}</p>
                    <p className="text-base mb-5">{`Your time: ${time.toHHMMSS()}`}</p>
                    <p className="text-base mb-5 text-center font-bold">
                        {`You have reached ${correctCount} of ${questions.length} \
                        points, (${mark}%)`}
                    </p>
                    <table className="bg-ukwhite w-full lg:w-600 mx-auto mb-3 p-3 font-bold flex border border-gray-500">
                        <tbody className="w-full">
                            <tr className="pb-3">
                                <td className="w-1/4 border-r border-gray-500 px-2">Average score</td>
                                <td className="pl-0"><div className="bg-green-900 h-4" style={{ width: `${average}%` }}></div></td>
                            </tr>
                            <tr>
                                <td className="w-1/4 border-r border-gray-500 px-2">Your score</td>
                                <td className="pl-0 flex items-center"><div className="bg-yellow-700 h-4 mr-2" style={{ width: `${mark}%` }}></div>{`${mark}%`}</td>
                            </tr>
                        </tbody>
                    </table>
                    {passed ? <p className="text-center text-green-600">
                        <AiOutlineCheckCircle className="inline-block text-3xl text-green-600" />
                        You PASSED the Test!
                    </p>
                        : <p className="text-center text-red-600">
                            <AiOutlineCloseCircle className="inline-block text-3xl text-red-600" />
                            You FAILED the Test!
                        </p>}
                    <span className="text-center my-4">Share:</span>
                    <div className="flex justify-center text-6xl">
                        <a href={`https://www.facebook.com/sharer.php?u=${currentUrl}`}><AiFillFacebook className="text-indigo-600" /></a>
                        <a href={`http://twitter.com/share?text=Practice%20tests%20to%20PASS%20and%20get%20the%20British%20Citizenship!%20%F0%9F%87%AC%F0%9F%87%A7Could%20you%20pass%20this%20Life%20in%20the%20UK%20test?%20%E2%9C%85%20GIVE%20IT%20A%20GO!&url=${currentUrl}`}><AiFillTwitterCircle className="text-sky-700" /></a>
                        <a href={`https://wa.me/?text=Practice%20tests%20to%20PASS%20and%20get%20the%20British%20Citizenship!%20%F0%9F%87%AC%F0%9F%87%A7Could%20you%20pass%20this%20Life%20in%20the%20UK%20test?%20%E2%9C%85%20GIVE%20IT%20A%20GO!%20${currentUrl}`}><AiOutlineWhatsApp className="text-green-600" /></a>
                    </div>
                    <button className="bg-sky-900 rounded-lg text-white w-fit px-3 mb-5" onClick={e => toggleReview()}>{showReview ? "Hide" : "View"} questions</button>
                    {showReview && <div className="flex flex-col">
                        <QuestionBox
                        questions={questions} 
                        index={currentIndex} 
                        status={status}
                        updateQuestions={setQuestions} 
                        setIndex={setCurrentIndex} 
                        setStatus={setStatus}/>
                    </div>}
                </div>
            )}
        </div>
    )
}