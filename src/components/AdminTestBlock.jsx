import { useNavigate } from "react-router-dom"

const AdminTestBlock = ({ chapter, testNum, timelimit, id }) => {

    const navigate = useNavigate()

    const handleTestClick = () => {
        navigate(`test/${id}`)
    }

    return (
        <div className="bg-[#A8DADC] py-2 mb-3 px-3 cursor-pointer" onClick={handleTestClick}>
            <div className="py-1 bg-gray flex justify-between">
                <div className="flex">
                    <p className="mb-0">Chapter - {chapter}</p>
                    <p className="mx-2 mb-0">Test Number - {testNum}</p>
                </div>
                <div>
                    <p className="mb-0">Time Limit - {timelimit}</p>
                </div>
            </div>
        </div>
    )
}

export default AdminTestBlock