import React from "react";
import { Link } from "react-router-dom";
import Donate from "../components/Donate";
const exams = [
  { chapter: 0, testNum: 1, type: "Exam" },
  { chapter: 0, testNum: 2, type: "Exam" },
  { chapter: 0, testNum: 3, type: "Exam" },
  { chapter: 0, testNum: 4, type: "Exam" },
  { chapter: 0, testNum: 5, type: "Exam" },
  { chapter: 0, testNum: 6, type: "Exam" },
  { chapter: 0, testNum: 7, type: "Exam" },
  { chapter: 0, testNum: 8, type: "Exam" },
  { chapter: 0, testNum: 9, type: "Exam" },
  { chapter: 0, testNum: 10, type: "Exam" },
]

const testimonials = [
  { author: "Tatiana E.", country: "colombia", city: "Manchestar", content: "Your web was really useful for me! I did all the tests and the day of the exam, I realized there were a new 10 exams! I did the exams! I cannot believe all my questions were from this 10 exams! So thanks very much! I passed my test!!!" },
  { author: "Zsuzsanna Williams", country: "Hungary", city: "Addlestone", content: "A HUGE thank you to all, who put this page together and looks after it well. I’ve passed my test today and as others said, all the questions were from here. This website is just amazing!!!! I’m just so happy I found it to start off with. Without it I wouldn’t have passed the test, as the book is simply not enough. Thank You!" },
  { author: "Tatiana E.", country: "colombia", city: "Manchestar", content: "Your web was really useful for me! I did all the tests and the day of the exam, I realized there were a new 10 exams! I did the exams! I cannot believe all my questions were from this 10 exams! So thanks very much! I passed my test!!!" },
  { author: "Zsuzsanna Williams", country: "Hungary", city: "Addlestone", content: "A HUGE thank you to all, who put this page together and looks after it well. I’ve passed my test today and as others said, all the questions were from here. This website is just amazing!!!! I’m just so happy I found it to start off with. Without it I wouldn’t have passed the test, as the book is simply not enough. Thank You!" },
  { author: "Tatiana E.", country: "colombia", city: "Manchestar", content: "Your web was really useful for me! I did all the tests and the day of the exam, I realized there were a new 10 exams! I did the exams! I cannot believe all my questions were from this 10 exams! So thanks very much! I passed my test!!!" },
  { author: "Zsuzsanna Williams", country: "Hungary", city: "Addlestone", content: "A HUGE thank you to all, who put this page together and looks after it well. I’ve passed my test today and as others said, all the questions were from here. This website is just amazing!!!! I’m just so happy I found it to start off with. Without it I wouldn’t have passed the test, as the book is simply not enough. Thank You!" },
  { author: "Tatiana E.", country: "colombia", city: "Manchestar", content: "Your web was really useful for me! I did all the tests and the day of the exam, I realized there were a new 10 exams! I did the exams! I cannot believe all my questions were from this 10 exams! So thanks very much! I passed my test!!!" },
  { author: "Zsuzsanna Williams", country: "Hungary", city: "Addlestone", content: "A HUGE thank you to all, who put this page together and looks after it well. I’ve passed my test today and as others said, all the questions were from here. This website is just amazing!!!! I’m just so happy I found it to start off with. Without it I wouldn’t have passed the test, as the book is simply not enough. Thank You!" },
]
const Exams = () => {
  return (
    <div className="text-lg">
      <div className="bg-[#A8DADC] text-white p-2 lg:p-5">
        <h1 className="container text-2xl screen mx-auto px-5 font-bold">
          Exams
        </h1>
      </div>
      <div className="container flex flex-col justify-between md:flex-row 
    mx-auto text-lg px-5">
        <div className="w-full md:w-3/4 mt-5">
          <p>The following tests are a <b>compilation of exam questions</b> reported by candidates.</p>
          <div className="flex flex-wrap justify-start">
            {exams.map((exam, index) =>
              <div className="my-5 drop-shadow-md w-1/4 px-1 md:px-2 min-w-fit">
                <Link
                  to={"/exams/" + exam.testNum}
                  key={index}
                  className="p-2 uppercase text-lg font-bold bg-[#A8DADC]  text-center \
                text-white block rounded-full">
                  {"Exam " + exam.testNum + ((index == exams.length - 1) ? "\nNEW!" : "")}
                </Link>
              </div>
            )}
            <p>Life in the UK Test Web has already helped thousands of candidates to <b>pass</b> their <b>Life in the UK</b> Test successfully and we continuously work to provide the best online training possible for candidates. We want to congratulate all the people who have passed their citizenship test and <b>thank all</b> of those <b>who have contributed</b> with their feedback and support. If you would also like to contribute to the website, you can do it by sharing your experiences with us, leaving your feedback in the comment section, spreading the word through social media, donating or writing directly to us. If you have any questions please do not hesitate to contact us and we will be very happy to assist you.</p>

            <span className="text-gray-500 text-5xl text-center w-full my-5">Testimonials</span>
            {testimonials.map((testimonial, index) =>
              <div className="flex flex-col my-5" key={index}>
                <p className="p-3 italic">
                  {testimonial.content}
                </p>
                <div className="flex items-center">
                  <span className="pr-3"><img src={`/images/flags/${testimonial.country}.png`} width={40} /></span>
                  <span><b>{testimonial.author}</b> {testimonial.city}</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full md:w-1/3 min-w-60 md:pl-5 lg:pl-10 mt-5">
          <Donate />
        </div>
      </div>
    </div>
  );
};

export default Exams;
