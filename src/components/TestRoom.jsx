import { Link } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineRightCircle } from "react-icons/ai";
import { useEffect, useState } from "react";

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
const START = 0;
const MIDDLE = 1;
const END = 2;

export default function TestRoom(props) {
    const [status, setStatus] = useState(START);
    const [time, setTime] = useState(props.test.timelimit * 60)
    const [mark, setMark] = useState(0)
    const [answer, setAnswer] = useState(props.test.questions)
    setTimeout(() => {
        if (time == 0) setStatus(END)
        else setTime(time - 1)
    }, 1)

    let correctCount = answer.filter(q => q.correct).length
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
                    <div className="h-2 bg-blue-700" style={{ width: `${time * 100 / props.test.timelimit / 60}%` }}></div>
                </div>
            )}
            {status == END && (
                <div className="flex flex-col">
                    <span className="text-2xl font-bold my-3">Result</span>
                    <p className="text-base mb-5">{`${correctCount} of ${answer.length} questions answered correctly`}</p>
                    <p className="text-base mb-5">{`Your time: ${time.toHHMMSS()}`}</p>
                    <p className="text-base mb-5 text-center font-bold">
                        {`You have reached ${correctCount} of ${answer.length} \
                        points, (${correctCount * 100 / answer.length}%)`}
                    </p>
                    <table className="w-full lg:w-600 mx-auto mb-3 p-3 font-bold flex border border-gray-500">
                        <tbody className="w-full">
                            <tr>
                                <td className="w-1/4 border-r border-gray-500">Average score</td>
                                <td className="pl-0"><div className="bg-green-900 h-4" style={{ width: `${3 + correctCount * 97 / answer.length}%` }}></div></td>
                            </tr>
                            <tr>
                                <td className="w-1/4 border-r border-gray-500">Your score</td>
                                <td className="pl-2">{`${correctCount * 100 / answer.length}%`}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}