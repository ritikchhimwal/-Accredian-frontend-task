import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormModel = ({ onClose }) => {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    friendName: '',
    friendEmail: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    // Check for empty fields
    if (!formData.userName) {
      isValid = false;
      tempErrors["userName"] = "Name is required.";
    }
    if (!formData.userEmail) {
      isValid = false;
      tempErrors["userEmail"] = "Email is required.";
    }
    if (!formData.friendName) {
      isValid = false;
      tempErrors["friendName"] = "Friend's name is required.";
    }
    if (!formData.friendEmail) {
      isValid = false;
      tempErrors["friendEmail"] = "Friend's email is required.";
    }

    // Check for valid email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.userEmail && !emailPattern.test(formData.userEmail)) {
      isValid = false;
      tempErrors["userEmail"] = "Enter a valid email address.";
    }
    if (formData.friendEmail && !emailPattern.test(formData.friendEmail)) {
      isValid = false;
      tempErrors["friendEmail"] = "Enter a valid email address.";
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      try {
        const response = await axios.post('http://localhost:5000/refer', formData);
        console.log('Data submitted successfully', response.data);
        setFormData({
          userName: '',
          userEmail: '',
          friendName: '',
          friendEmail: ''
        });
        toast.success('Data submitted successfully');
      } catch (error) {
        console.error('Error submitting data', error);
        toast.error('Error submitting data');
      } finally {
        setIsLoading(false);
        onClose();
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md w-80 relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
            <div className="loader"></div>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Your Name:
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.userName && <span className="text-red-600">{errors.userName}</span>}
          </label>
          <label className="block mb-2">
            Your Email:
            <input
              type="email"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.userEmail && <span className="text-red-600">{errors.userEmail}</span>}
          </label>
          <label className="block mb-2">
            Friend's Name:
            <input
              type="text"
              name="friendName"
              value={formData.friendName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.friendName && <span className="text-red-600">{errors.friendName}</span>}
          </label>
          <label className="block mb-2">
            Friend's Email:
            <input
              type="email"
              name="friendEmail"
              value={formData.friendEmail}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.friendEmail && <span className="text-red-600">{errors.friendEmail}</span>}
          </label>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full px-4 py-2 mt-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
          >
            Close
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FormModel;
