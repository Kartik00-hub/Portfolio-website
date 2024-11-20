import React from "react";
import { useState } from "react";

const Contact = () => {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const validateForm = () => {
    let formErrors = {};
    if (!formdata.name) {
      formErrors.name = "Please enter your name";
    }
    if (!formdata.email) {
      formErrors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      formErrors.email = "Please enter a valid email address";
    }
    if (!formdata.message) {
      formErrors.message = "Please enter your message";
    }
    return formErrors;
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Form is valid, submit the form data
      console.log("Form submitted:", formdata);
    } else {
      // Set the errors to display
      setErrors(formErrors);
    }

    alert("Message submitted! We will get back to you soon.");
  };
  return (
    <div className="mx-auto">
      <form onSubmit={handlesubmit}>
        <div className="flex h-screen w-full  justify-center items-start mt-10 ">
          <div className="text-white p-10 w-auto h-auto relative bg-gradient-to-br from-purple-200 via-gray-800 to-purple-200 rounded-lg shadow-2xl max-w-lg mx-auto">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-lg pointer-events-none blur-2xl opacity-40 z-0"></div>

            {/* Content (form fields, buttons, etc.) */}
            <div className="relative ">
              <h1 className="font-archivo mb-8 text-center text-4xl text-gradient bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-400 text-transparent">
                Get in Touch!
              </h1>

              <div className="w-full">
                <input
                  className="p-3 mb-5 w-full rounded-lg font-serif text-black focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                  type="text"
                  placeholder="Your name"
                  name="name"
                  onChange={handlechange}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
                <input
                  className="p-3 mb-5 w-full rounded-lg font-serif text-black focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handlechange}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
                <textarea
                  className="p-3 mb-5 w-full rounded-lg h-40 font-serif text-black focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                  placeholder="Your message"
                  name="message"
                  onChange={handlechange}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              <div className="mb-5 flex justify-center items-center">
                <button className="border p-3 px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-300 text-white font-semibold rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:scale-110 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:shadow-2xl hover:shadow-purple-500/50 focus:outline-none">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
