import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, json } from "react-router-dom";
import Home from "./pages/Home";
import AboutUS from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Exams from "./pages/Exams";
import Tests from "./pages/Tests";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import StudyMaterials from "./pages/StudyMaterials";
import Footer from "./components/Footer";
import Faqs from "./pages/Faqs";
import Chapter1 from "./pages/Chapters/Chapter1";
import Chapter2 from "./pages/Chapters/Chapter2";
import Chapter3 from "./pages/Chapters/Chapter3";
import Chapter4 from "./pages/Chapters/Chapter4";
import Chapter5 from "./pages/Chapters/Chapter5";
import Test from "./pages/Test";
import Exam from "./pages/Exam";
import Admin from "./pages/Admin";
import { useEffect, useState } from "react";
import TestPage from "./pages/TestPage";
import CreateTest from "./pages/CreateTest";
import { useNavigate } from "react-router-dom";

function App() {

  const [tests, setTests] = useState([])
  const [chapters, setChapters] = useState([])
  const [newTest, setNewTest] = useState({
    chapter: 0,
    testNum: 0,
    timelimit: 0,
    questions: []
  })

  const [questions, setQuestions] = useState([])
  const [isTestCreated, setIsTestCreated] = useState(false)
  const [questionPushed, setQuestionPushed] = useState(false)
  const [showLoader, setshowLoader] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
      fetch('https://crudmern.onrender.com/api/members')
      .then(res => res.json())
      .then(data => {
          // console.log(data)
          setTests(data)
      }).catch(e => {
          console.log(e)
      }) 
  }, [])


  useEffect(() => {
    if(isTestCreated){
      setNewTest({...newTest, questions: questions})
      setQuestionPushed(true)
    }
  }, [isTestCreated])

  const handleSave = () => {
    console.log(newTest)
    fetch('https://crudmern.onrender.com/api/members/add', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(newTest)
    }).then(res => {
      return res.json()
    }).then(data => {
      console.log(data)
      navigate('/admin')
    }).catch(e => {
      console.error(e)
    })
  }



  return (
    <div className="relative">
      <Navbar />
      <Routes>
        <Route path="/aboutUs" element={<AboutUS />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/exams/:testNum" element={<Exam />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/tests/:testNum" element={<Test />} />
        <Route path="/tests/:chapter/:testNum" element={<Test />} />
        <Route path="/studyMaterials" element={<StudyMaterials />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/termsAndConditions" element={<TermsAndConditions />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/admin" element={<Admin tests={tests} newTest={newTest} setNewTest={setNewTest} showLoader={showLoader} setshowLoader={setshowLoader}/>} />
        <Route path="/admin/test/:id" element={<TestPage />} />
        <Route path="/admin/createTest" element={<CreateTest newTest={newTest} setNewTest={setNewTest} questions={questions} setQuestions={setQuestions} setIsTestCreated={setIsTestCreated} handleSave={handleSave} showLoader={showLoader} setshowLoader={setshowLoader}/>} />
        <Route
          path="/the-values-and-principles-of-the-uk"
          element={<Chapter1 />}
        />
        <Route path="/what-is-the-uk" element={<Chapter2 />} />
        <Route path="/a-long-and-illustrious-history" element={<Chapter3 />} />
        <Route path="/a-modern-thriving-society" element={<Chapter4 />} />
        <Route
          path="/the-uk-government-the-law-and-your-role"
          element={<Chapter5 />}
        />
        <Route path="/" exact element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
