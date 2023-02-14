import { useEffect, useState } from "react";
import { apiUrl } from "../config.json";

const START = 0;
const MIDDLE = 1;
const END = 2;

export default function QuestionBox(props) {
    const [questions, setQuestions] = useState(props.questions)
    const [index, setIndex] = useState(props.status==END?0:props.index)
    const [status, setStatus] = useState(props.status)

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

    const calcColor = (index) => {
        if(!question.submitted && status==MIDDLE) return ""
        return question.answer==index?"bg-green-500":(question.selected==index?"bg-red-500":"")
    }

    const reviewQuestion = (index) => {
        let reviewed = questions[index].reviewed
        questions[index].reviewed = !reviewed
        setQuestions(questions)
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
        <div>
            <div className="mb-4">
                <div className="flex flex-wrap justify-start border p-2 bg-ukwhite">
                    {props.questions.map((question, index) => (
                        <div key={index} className={`
                        cursor-pointer border px-1 m-1 w-7 text-center
                        ${index == props.index && "border-sky-500"}
                        ${question.selected!==undefined?"bg-green-700"
                        :question.reviewed && "bg-yellow-500"}
                    `} onClick={() => setIndex(index)}>{index + 1}</div>
                    ))}
                </div>
                <div className="flex items-baseline">
                    <span className="block w-2 h-2 bg-green-500 mx-2" />Answered
                    <span className="block w-2 h-2 bg-yellow-500 mx-2" />Review
                </div>
            </div>
            {status==MIDDLE&&
                <button 
                className="rounded text-stone-800 border bg-ukwhite w-fit px-3" 
                onClick={e => reviewQuestion(index)}>
                    Review question
                </button>
            }
            <p className="my-4">Question <b>{index + 1}</b> of <b>{questions.length}</b></p>
            <div className="flex flex-col my-3">
                <p><b>{question.question}</b></p>
                {question.audioPath&& <audio src={`${apiUrl}/questions${question.audioPath}`} controls autoPlay/>}
                <div className="border bg-ukwhite p-3 my-3">
                    {question.choices.map((choice, index) =>
                        <div key={index} 
                            className={`flex justify-start items-center ${calcColor(index)}`}>
                            <input type="radio"
                                disabled = {question.submitted}
                                checked = {question.selected==index}
                                style={{position:"relative", display:"block", opacity:1 }} 
                                name={`choice${props.index}`} key={index} id={`choice${index}`} 
                                value={index} onChange={(e) => updateAnswer(index)} />
                            <label className="pl-2" htmlFor={`choice${index}`}>{choice}</label>
                        </div>
                    )}
                </div>
                {(question.submitted || status==END) &&
                    <div className="border bg-ukwhite p-3 my-3">
                        {question.selected==question.answer?<b>Corrrect</b>
                        :<div>
                            <b>{question.selected==question.answer?"Correct":"Incorrect"}</b>
                            <br/>
                            <p>{question.description}</p>
                        </div>}
                    </div>
                }
                {status==MIDDLE&&(
                    !question.submitted?
                    <button className="bg-sky-900 rounded-lg text-white w-fit px-3" onClick={e => submitAnswer()}>
                        Check
                    </button>
                    :<button className="bg-sky-900 rounded-lg text-white w-fit px-3" onClick={next}>
                        {index==questions.length-1?"Finish quiz":"Next"}
                    </button>
                )}
                
            </div>
        </div>
    )
}
