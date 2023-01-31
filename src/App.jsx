import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/aboutUs" element={<AboutUS />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/tests" element={<Tests />} />
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
