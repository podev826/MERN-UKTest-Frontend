import React, { useState } from "react";
import Donate from "../components/Donate";
import { Textbox, Textarea } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({'name': false, 'email':false});

  const contactSubmit = (e) => {
    console.log(errors);
    e.preventDefault();
    if(Object.values(errors).indexOf(false) >= 0 || Object.values(errors).length == 0) alert("Validation error")
    else alert("Form submitted");
  };
  return (
    <div className="text-lg">
      <div className="bg-[#A8DADC] text-white p-2 lg:p-5">
        <h1 className="container text-2xl screen mx-auto px-5 font-bold">
          Contact Us
        </h1>
      </div>
      <div className="container flex flex-col justify-between md:flex-row 
        mx-auto text-lg px-5">
        <div className="w-full md:w-3/4 mt-5">
          <form
            name="contactform"
            className="contactform"
            onSubmit={e => contactSubmit(e)}
          >
            <div className="flex flex-col">
            <label htmlFor="Name" className="mt-4 text-base">Your Name (requried)</label>
            <Textbox
              classNameInput="text-gray-600 text-base px-3 py-3"
              // classNameContainer="mt-2 lg:mt-3"
              attributesInput={{ id: 'Name', name: 'Name', type: 'text' }}
              value={name}
              onChange={(name, e) => {
                setName(name);
              }}
              onBlur={e => {}}
              validationCallback={res => { errors['name'] = !res; setErrors(errors)}}
              validationOption={{ name: 'Name', alphanumeric: true, required: true }}
            />

            <label htmlFor="Email" className="mt-4 text-base">Your Email (requried)</label>
            <Textbox
              classNameInput="text-gray-600 text-base px-3 py-3  border-gray-200 border w-full"
              // classNameContainer="mt-2 lg:mt-3"
              attributesInput={{ id: 'Email', name: 'email', type: 'text' }}
              value={email}
              onChange={(email, e) => {
                setEmail(email)
              }}
              onBlur={e => {}}
              validationCallback={res => { errors['email'] = !res; setErrors(errors)}}
              validationOption={{ name: 'Email', type: 'string', required: true,
              customFunc: email => {
                const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (reg.test(String(email).toLowerCase())) {
                  return true;
                } else {
                  return "Email address seems invalid";
                }
              } }}
              
            />

            <label htmlFor="Subject" className="mt-4 text-base">Your Subject</label>
            <Textbox
              classNameInput="text-gray-600 text-base px-3 py-3"
              // classNameContainer="mt-2 lg:mt-3"
              attributesInput={{ id: 'Subject', name: 'subject', type: 'text' }}
              value={subject}
              onChange={(subject, e) => {
                setSubject(subject);
              }}
              onBlur={e => {}}
              validationCallback={res => { errors['subject'] = !res; setErrors(errors)}}
              validationOption={{ name: 'Subject', check: false, required: false }}
            />
            <label htmlFor="Message" className="mt-4 text-base">Your Message</label>
            <Textarea
              classNameInput="text-gray-600 text-base px-3 py-3"
              // classNameContainer="mt-2 lg:mt-3"
              attributesInput={{ id: 'Message', name: 'message', type: 'text' }}
              value={message}
              onChange={(message, e) => {
                setMessage(message);
              }}
              onBlur={e => {}}
              validationCallback={res => { errors['message'] = !res; setErrors(errors)}}
              validationOption={{ name: 'message', check: false, required: false }}
            />
<button
        type="submit"
        className="uppercase w-fit text-lg font-bold bg-[#A8DADC] \
         text-white my-5 block rounded-full p-4 drop-shadow-2xl">
        <span className="px-5">Submit</span>
    </button>
                </div>
          </form>
        </div>
        <div className="w-full md:w-1/3 min-w-60 md:pl-5 lg:pl-10 mt-5">
          <Donate />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
