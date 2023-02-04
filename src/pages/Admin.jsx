import { useEffect, useState } from "react"
import AdminTestBlock from "../components/AdminTestBlock"


const Admin = ({ tests }) => {

  return (
    <div>
        <div className="flex justify-center py-2">
            <h3>Admin Panel</h3>
        </div>
        <div>
            {tests && tests.map(test => {
                return <AdminTestBlock key ={test._id} chapter={test.chapter} testNum={test.testNum} timelimit={test.timelimit} id={test._id}/>
            })}
        </div>
    </div>
  )
}

export default Admin