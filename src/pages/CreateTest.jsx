import React, { useEffect, useState } from 'react';


const CreateTest = ({ newTest, setNewTest, questions, setQuestions, setIsTestCreated, handleSave }) => {

    const [choice, setChoice] = useState({
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
    })

    const [show, setShow] = useState(false);
    const [newQuestion, setNewQuestion] = useState({
        description: "",
        choice: choice,
        answer: 0,
        audioPath: ''
    })

    const [isMixing, setIsMixing] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // handle add question
    const handleAddQuestion = () => {
        setIsMixing(false)
        setIsTestCreated(false)
        handleShow()
    }

    // handle new question
    const handleNewQuestion = (e) => {
        if (e.target.name === 'answer') {
            setNewQuestion({ ...newQuestion, [e.target.name]: parseInt(e.target.value) })
        } else {
            setNewQuestion({ ...newQuestion, [e.target.name]: e.target.value })
        }
    }

    // handle choice 
    const handleChoice = (e) => {
        setChoice({ ...choice, [e.target.name]: e.target.value })
    }

    // handle create question
    const handleCreateQuestion = () => {
        setNewQuestion({ ...newQuestion, choice })
        setIsMixing(true)
        handleClose()
    }

    useEffect(() => {
        if (isMixing) {
            setQuestions([...questions, newQuestion])
        }
    }, [isMixing])


    useEffect(() => {
        if (isMixing) {
            setIsTestCreated(true)
            handleReset()
        }
    }, [questions])


    // handle reset 
    const handleReset = () => {
        setNewQuestion({
            description: "",
            choice: [],
            answer: 0,
            audioPath: ''
        })

        setChoice({
            choice1: '',
            choice2: '',
            choice3: '',
            choice4: '',
        })
    }

    return (
        <div className='container mx-auto mt-4 py-3'>

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
                                <div className='mb-6'>
                                    <label htmlFor="choice3" className="block mb-2 text-sm font-medium">Question</label>
                                    <input type="text" id="choice3" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" name="description" value={newQuestion.description} onChange={handleNewQuestion} required />
                                </div>
                                <div className="grid gap-6 mb-6 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="choice1" className="block mb-2 text-sm font-medium">Choice 1</label>
                                        <input type="text" id="choice1" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" name="choice1" value={choice.choice1} onChange={handleChoice} required />
                                    </div>
                                    <div>
                                        <label htmlFor="choice2" className="block mb-2 text-sm font-medium">Choice 2</label>
                                        <input type="text" id="choice2" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" name="choice2" value={choice.choice2} onChange={handleChoice} required />
                                    </div>
                                    <div>
                                        <label htmlFor="choice3" className="block mb-2 text-sm font-medium">Choice 3</label>
                                        <input type="text" id="choice3" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" name="choice3" value={choice.choice3} onChange={handleChoice} required />
                                    </div>
                                    <div>
                                        <label htmlFor="choice4" className="block mb-2 text-sm font-medium">Choice 4</label>
                                        <input type="text" id="choice4" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" name="choice4" value={choice.choice4} onChange={handleChoice} required />
                                    </div>
                                </div>

                                <div className="grid gap-6 mb-6 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="answer" className="block mb-2 text-sm font-medium">Answer</label>
                                        <input type="number" id="answer" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" name="answer" value={newQuestion.answer} onChange={handleNewQuestion} required />
                                    </div>
                                    <div>
                                        <label htmlFor="audio-path" className="block mb-2 text-sm font-medium">Audio File</label>
                                        <input type="text" id="audio-path" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" name="audioPath" value={newQuestion.audioPath} onChange={handleNewQuestion} required />
                                    </div>
                                </div>

                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="button" className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" onClick={handleCreateQuestion}>Create</button>
                                <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={handleClose}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-1 px-4 rounded-md flex justify-between mb-3'>
                <div className="flex">
                    <h3 className='m-0 mr-2'>Chapter {newTest.chapter},</h3>
                    <h3 className='m-0'>Test {newTest.testNum}</h3>
                </div>
                <h3 className='m-0'>Time Limit: {newTest.timelimit}</h3>
            </div>

            <hr className='mb-6' />

            {questions.length !== 0 && questions.map(q => {
                return (
                    <div className='mb-6'>
                        <div className='mb-3'>
                            <div className="rounded-md border bg-[#f1f1f1] py-3 px-4 flex mb-3">
                                <h4 className='m-0'>{q.description}</h4>
                            </div>
                            <div className='grid gap-6 mb-6 md:grid-cols-2 mb-3'>
                                <div className="rounded-md border py-2 px-4 bg-[#f6f6f6]">
                                    <p className='m-0'>{q.choice.choice1}</p>
                                </div>
                                <div className="rounded-md border py-2 px-4 bg-[#f6f6f6]">
                                    <p className='m-0'>{q.choice.choice2}</p>
                                </div>
                                <div className="rounded-md border py-2 px-4 bg-[#f6f6f6]">
                                    <p className='m-0'>{q.choice.choice3}</p>
                                </div>
                                <div className="rounded-md border py-2 px-4 bg-[#f6f6f6]">
                                    <p className='m-0'>{q.choice.choice4}</p>
                                </div>
                            </div>

                            <div className="rounded-md border py-2 px-4 bg-[#f6f6f6] w-2/12">
                                <p className='m-0'>Answer - {q.answer}</p>
                            </div>
                        </div>
                    </div>
                )
            })}

            <div className="flex justify-between py-2">
                <button className='inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto sm:text-sm' onClick={handleAddQuestion}>Add Question</button>
                <button className='inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto sm:text-sm' onClick={handleSave}>Save</button>
            </div>




        </div>
    )
}

export default CreateTest