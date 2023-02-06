import { Link } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineRightCircle } from "react-icons/ai";
export default function Ticket({ title, to, className="" }) {
    return (
        <Link
            title={title}
            to={to}
            className={className + " relative w-72 border border-ukAzure rounded-lg \
                flex flex-col items-center text-gray-800 p-4 ticket"}>
            <p className="text-xl font-bold text mb-0">{title}</p>
            <div className="w-2/3 border-t border-gray-500 my-2"></div>
            <span className="flex justify-between w-full items-center px-4">Take the test</span>
            <AiOutlineRightCircle className="inline-block absolute bottom-2 right-4 text-4xl text-ukAzure" />
        </Link>
    )
}