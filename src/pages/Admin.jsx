import { useEffect, useState } from "react"
import AdminTestBlock from "../components/AdminTestBlock"
import { useNavigate } from "react-router-dom"
import Loader from "../components/Loader"

const Admin = ({ tests, newTest, setNewTest, showLoader, setShowLoader }) => {

  const [currentChapter, setCurrenChapter] = useState("1")
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [show, setShow] = useState(false);


  const navigate = useNavigate()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setData(() => tests.filter(test => test.chapter === parseInt(currentChapter)))
  }, [currentChapter, tests])

  useEffect(() => {
    setIsLoading(false)
  }, [data])

  // handle new test
  const handleNewTest = (e) => {
    setNewTest({...newTest, [e.target.name]: parseInt(e.target.value)})
  }

  // handle create 
  const handleCreate = () => {
    handleClose()
    navigate('/admin/createTest')
  }

  return (
    <div className="container mx-auto">
      {showLoader && <Loader />}

      {/* create test modal */}

      <div className={`relative z-10 ${!show && "hidden"}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">

        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

              <div className="bg-gray-50 px-4 py-3">
                <h4 className="m-0">Create New Test</h4>
              </div>

              <div className="py-2 px-6 mt-4">
                <div className="grid gap-6 mb-6 md:grid-cols-3">
                  <div>
                    <label htmlFor="chapterName" className="block mb-2 text-sm font-medium">Chapter Number</label>
                    <input type="number" id="chapterName" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" name="chapter" value={newTest.chapter} onChange={handleNewTest} required />
                  </div>
                  <div>
                    <label htmlFor="testNumber" className="block mb-2 text-sm font-medium">Test Number</label>
                    <input type="number" id="testNumber" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" name="testNum" value={newTest.testNum} onChange={handleNewTest} required />
                  </div>
                  <div>
                    <label htmlFor="timelimit" className="block mb-2 text-sm font-medium">Time Limit</label>
                    <input type="number" id="timelimit" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" name="timelimit" value={newTest.timelimit} onChange={handleNewTest} required />
                  </div>
                </div>

              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" onClick={handleCreate}>Create</button>
                <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={handleClose}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-2">
        <h3>Admin Panel</h3>
      </div>

      <div className="py-2 flex justify-between">
        <select name="selectChapter" className="px-2 py-1 border border-gray-300 rounded-md cursor-pointer" id="selectChapter" value={currentChapter} onChange={(e) => setCurrenChapter(e.target.value)}>
          <option value="1">Chapter 1</option>
          <option value="2">Chapter 2</option>
          <option value="3">Chapter 3</option>
          <option value="4">Chapter 4</option>
          <option value="5">Chapter 5</option>
        </select>

        <button className="createTest border rounded-md py-1 px-2" onClick={handleShow}>
          Create Test
        </button>
      </div>

      {isLoading && <div className="py-2">
        Loading.....
      </div>}
      <div>
        {!isLoading && data.map(test => {
          return <AdminTestBlock key={test._id} chapter={test.chapter} testNum={test.testNum} timelimit={test.timelimit} id={test._id} />
        })}
      </div>
    </div>
  )
}

export default Admin