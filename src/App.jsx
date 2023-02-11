
import { useEffect, useState } from "react";
import { useNavigate, Routes, Route, json, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AboutUS from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Exams from "./pages/Exams";
import Tests from "./pages/Tests";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import StudyMaterials from "./pages/StudyMaterials";
import Faqs from "./pages/Faqs";
import Chapter1 from "./pages/Chapters/Chapter1";
import Chapter2 from "./pages/Chapters/Chapter2";
import Chapter3 from "./pages/Chapters/Chapter3";
import Chapter4 from "./pages/Chapters/Chapter4";
import Chapter5 from "./pages/Chapters/Chapter5";
import Test from "./pages/Test";
import Exam from "./pages/Exam";

import TestAdmin from "./admin/components/tests";
import TestForm from "./admin/components/testForm";
import NotFound from "./admin/components/notFound";
import LoginForm from "./admin/components/loginForm";
import Logout from "./admin/components/logout";

import AdminLayout from "./admin/AdminLayout";
import AppLayout from "./AppLayout";
import authService from "./services/authService";
import QuestionForm from "./admin/components/questionForm";

function PrivateRoute({ children }) {
  const auth = authService.getCurrentUser();
  return auth ? children : <Navigate to="/admin/login" />;
}

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

  // useEffect(() => {
  //   fetchOnLoad()
  // }, [])

  // const fetchOnLoad = () => {
  //   fetch('https://crudmern.onrender.com/api/members')
  //     .then(res => res.json())
  //     .then(data => {
  //       // console.log(data)
  //       setTests(data)
  //     }).catch(e => {
  //       console.log(e)
  //     })
  // }


  // useEffect(() => {
  //   if (isTestCreated) {
  //     setNewTest({ ...newTest, questions: questions })
  //     setQuestionPushed(true)
  //   }
  // }, [isTestCreated])

  // const handleSave = () => {
  //   console.log(newTest)
  //   fetch('https://crudmern.onrender.com/api/members/add', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(newTest)
  //   }).then(res => {
  //     return res.json()
  //   }).then(data => {
  //     console.log(data)
  //     fetchOnLoad()
  //     navigate('/admin')
  //   }).catch(e => {
  //     console.error(e)
  //   })
  // }

  return (
    <>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="/admin/login" element={<LoginForm />} />
          <Route path="/admin/logout" element={<Logout />} />
          <Route path="/admin/tests/:id" element={<PrivateRoute><TestForm /></PrivateRoute>} />
          <Route path="/admin/tests/:testId/:questionId" element={<PrivateRoute><QuestionForm /></PrivateRoute>} />
          <Route path="/admin/tests" element={<PrivateRoute><TestAdmin /></PrivateRoute>} />
          <Route path="/admin/" element={<Navigate to="/admin/tests" />} />
        </Route>
        <Route element={<AppLayout />} >
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
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
