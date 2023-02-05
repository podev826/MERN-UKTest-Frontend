import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const TestPage = () => {

    const { id } = useParams()
    const [data, setData] = useState({})
    const [questions, setQuestions] = useState([])

    useEffect(() => {

        fetch(`https://crudmern.onrender.com/api/members/${id}`)
            .then(res => {
                return res.json()
            }).then(data => {
                console.log(data[0])
                setData(data[0])
                setData(data[0].questions)
            }).catch(e => {
                console.error(e)
            })
    }, [])

    return (
        <div className="container mx-auto">
            <div className="py-2 text-center flex justify-between mb-1 px-1">
                <h3>Chapter {2}, Test {1}</h3>
                <h3>Time Limit {45}</h3>
            </div>




        </div>
    )
}

export default TestPage