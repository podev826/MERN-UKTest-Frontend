import { Link } from "react-router-dom";
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineRightCircle } from "react-icons/ai";
export default function Ticket({ _id, title, to, className="" }) {

    const status = localStorage.getItem('testStatus')?JSON.parse(localStorage.getItem('testStatus'))[_id]:null
    return (
        <Link
            _id={_id}
            title={title}
            to={to} 
            className={className + " relative w-72 border border-ukAzure rounded-lg \
                flex flex-col items-center text-gray-800 p-4 ticket"}>
            <p className="text-xl font-bold text mb-0">{title}</p>
            <div className="w-2/3 border-t border-gray-500 my-2"></div>
            {!status?<div className="w-full"><span className="flex float-left w-full items-center px-4">Take the test</span>
                <AiOutlineRightCircle className="inline-block absolute bottom-2 right-4 text-4xl text-ukAzure" />
                </div>
            :<div className="w-full">
                <span className="flex float-left w-full items-center px-4">
                    {`${status.correctCount + "/" + status.total} correct answers`}
                </span>
                {!status.passed?
                    <AiOutlineCloseCircle className="inline-block absolute bottom-2 right-4 text-4xl text-ukred" />
                :
                <AiOutlineCheckCircle className="inline-block absolute bottom-2 right-4 text-4xl text-green-600" />
                }
            </div>
            }
        </Link>
    )
}