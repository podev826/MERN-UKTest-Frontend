import React from "react";
import AboutUsTest from "../img/AboutUSTest.png";
import Donate from "../components/Donate";

const AboutUs = () => {
  return (
    <div className="text-lg">
      <div className="bg-[#A8DADC] text-white p-2 lg:p-5">
        <h1 className="container text-2xl screen mx-auto px-5 font-bold">
          About US
        </h1>
      </div>
      <div className="container flex flex-col justify-between md:flex-row 
      mx-auto text-lg px-5">
        <div className="w-full md:w-3/4 mt-5">
          <p className="max-w-screen-lg my-4">
            Lifeintheuktestweb has been created to help you <b>pass</b> the Life in the
            UK Test. We have the experience of having undertaken and <b>successfully
            </b> passed the UK citizenship test ourselves. Here we have gathered
            numerous questions that cover the contents of the official &apos;Life
            in the United Kingdom: A guide for new residents&apos; 3rd edition
            Handbook, valid for the 2023 Life in the UK Test and that will get you
            ready for the official test.
          </p>
          <p className="my-4 max-w-screen-lg">
            We strive to keep the information presented here free and as
            up-to-date as possible to get you prepared for the official test 
            with <b>confidence</b>. We though it was important to offer the option to practice
            for the test by chapter, so you can assess the knowledge you have
            gained at the same time as you read the book. Also, we created tests
            that simulate the real test with questions that cover the entire
            handbook, the same timing as the exam and with the option to mark the
            questions you are unsure of to review or respond them at the end.
          </p>
          <p className="my-4 max-w-screen-lg">
            Many of the questions here have been asked in the <b>official test</b>,
            although the incorrect answers may vary in some cases. We try to
            collect questions that have been recently asked in the official
            citizenship test and we always appreciate candidate&apos;s input. So,
            if you are going to take the exam soon or you have taken it recently
            please email us and <b>share</b> it by contactisng us so future candidates
            get a better experience.
          </p>
          <div className="my-6">
            <img src={AboutUsTest} alt="" className="md:ml-10  m-1" />
          </div>
        </div>
        <div className="w-full md:w-1/3 min-w-60 md:pl-5 lg:pl-10 mt-5">
          <Donate />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
