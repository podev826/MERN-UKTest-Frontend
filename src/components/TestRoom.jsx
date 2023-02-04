import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillTwitterCircle, AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineWhatsApp } from "react-icons/ai";
import { useEffect, useState } from "react";

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

const PaginationBox = (props) => {
    const [currentIndex, setCurrentIndex] = useState(props.currentIndex)
    useEffect(() => props.changeIndex(currentIndex))
    return (
        <div className="mb-4">
            <div className="flex flex-wrap justify-start border p-2 bg-ukwhite">
                {props.questions.map((question, index) => (
                    <div key={index} className={`
                    cursor-pointer border px-1 mx-1
                    ${index == props.currentIndex && "border-sky-500"}
                    ${question.selected!==undefined?"bg-green-700"
                    :question.reviewed && "bg-yellow-500"}
                `} onClick={() => setCurrentIndex(index)}>{index + 1}</div>
                ))}
            </div>
            <div className="flex items-baseline">
                <span className="block w-2 h-2 bg-green-500 mx-2" />Answered
                <span className="block w-2 h-2 bg-yellow-500 mx-2" />Review
            </div>
        </div>
    )
}

const QuestionBox = (props) => {
    const [questions, setQuestions] = useState(props.questions)
    const [index, setIndex] = useState(props.index)
    const [status, setStatus] = useState(MIDDLE)

    const question = questions[index]

    const updateAnswer = (value) => {
        console.log('index', index)
        if(value!==undefined){
            questions[index].selected = value
            setQuestions(questions)
        }
    }

    const submitAnswer = () => {
        questions[index].submitted = true
        setQuestions(questions)
    }

    const caleColor = (index) => {
        if(!question.submitted) return ""
        return question.answer==index?"bg-green-500":(question.selected==index?"bg-red-500":"")
    }

    const next = () => {
        if(index<questions.length-1)
            setIndex(index+1)
        else 
            setStatus(END)
    }
    useEffect(() => {
        props.setIndex(index)
        props.updateQuestions(questions)
        props.setStatus(status)
    })

    return (
        <div className="flex flex-col my-3">
            {props.audioPath && <div>audio player</div>}
            <p><b>{question.question}</b></p>
            <div className="border bg-ukwhite p-3 my-3">
                {question.choice.map((choice, index) =>
                    <div key={index} 
                        className={`flex justify-start items-center ${caleColor(index)}`}>
                        <input  type="radio"
                            {...question.submitted?"disabled":""}
                            style={{position:"relative", display:"block", opacity:1 }} 
                            name="choice" key={index} id={`choice${index}`} 
                            value={index} onChange={(e) => updateAnswer(index)} />
                        <label className="pl-2" htmlFor={`choice${index}`}>{choice}</label>
                    </div>
                )}
            </div>
            {!question.submitted? <button className="bg-sky-900 rounded-lg text-white w-fit px-3" onClick={e => submitAnswer()}>Check</button>
            :<button className="bg-sky-900 rounded-lg text-white w-fit px-3" onClick={next}>{index==questions.length-1?"Finish quiz":"Next"}</button>}
        </div>
    )
}

export default function TestRoom(props) {
    const [status, setStatus] = useState(START);
    const [time, setTime] = useState(props.test.timelimit * 60)
    const [mark, setMark] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [questions, setQuestions] = useState(props.test.questions)
    const [showReview, setShowReview] = useState(false)

    const toggleReview = () => {
        setShowReview(!showReview)
    }

    const reviewQuestion = (index) => {
        let reviewed = questions[index].reviewed
        questions[index].reviewed = !reviewed
        setQuestions(questions)
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
    return (
        <div>
            {status == START && (
                <div className="flex flex-col">
                    <span className="text-xl mb-4">{"Test " + props.test.testNum}</span>
                    <button className="bg-sky-900 rounded-lg text-white w-fit px-3" onClick={e => setStatus(MIDDLE)}>Start quiz</button>
                </div>
            )}
            {status == MIDDLE && (
                <div className="flex flex-col">
                    <span className="text-xl font-bold my-3">Time Limit: {time.toHHMMSS()}</span>
                    <div className="h-2 bg-blue-700 mb-3" style={{ width: `${time * 100 / props.test.timelimit / 60}%` }}></div>
                    <PaginationBox 
                        currentIndex={currentIndex} 
                        questions={questions} 
                        changeIndex={setCurrentIndex} />
                    <button 
                        className="rounded text-stone-800 border bg-ukwhite w-fit px-3" 
                        onClick={e => reviewQuestion(currentIndex)}>
                            Review question
                    </button>
                    <p className="my-4">Question <b>{currentIndex + 1}</b> of <b>{questions.length}</b></p>
                    <QuestionBox 
                        questions={questions} 
                        index={currentIndex} 
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
                        points, (${Math.floor(correctCount * 10000 / questions.length)/100}%)`}
                    </p>
                    <table className="bg-ukwhite w-full lg:w-600 mx-auto mb-3 p-3 font-bold flex border border-gray-500">
                        <tbody className="w-full">
                            <tr className="pb-3">
                                <td className="w-1/4 border-r border-gray-500 px-2">Average score</td>
                                <td className="pl-0"><div className="bg-green-900 h-4" style={{ width: `${1 + correctCount * 99 / questions.length}%` }}></div></td>
                            </tr>
                            <tr>
                                <td className="w-1/4 border-r border-gray-500 px-2">Your score</td>
                                <td className="pl-2">{`${Math.floor(correctCount * 10000 / questions.length)/100}%`}</td>
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
                        <PaginationBox currentIndex={currentIndex} questions={questions} changeIndex={(index) => setCurrentIndex(index)} />

                        {/* {questions.map((question, index)=>
                            <QuestionBox question={question} reviewed={true} answered={true}/>
                        )} */}
                    </div>}
                </div>
            )}
        </div>
    )
}