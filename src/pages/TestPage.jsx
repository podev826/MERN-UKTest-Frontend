import { useEffect } from "react"
import { useParams } from "react-router-dom"

const TestPage = () => {

    const { id } = useParams()

    useEffect(() => {

        fetch(`https://crudmern.onrender.com/api/members/${id}`)
            .then(res => {
                return res.json()
            }).then(data => {
                console.log(data)
            }).catch(e => {
                console.error(e)
            })

    }, [])

    return (
        <div>TestPage</div>
    )
}

export default TestPage