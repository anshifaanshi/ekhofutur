import React, { useState } from 'react';

const SubmissionForm = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', // Added phone state
    message: '' // Added message state
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    // Standard handler to update state for any input using the 'name' attribute
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsSubmitted(false); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    
    // Simulate API call success
    setIsSubmitted(true);
    // You might reset form here: setFormData({ name: '', email: '' });
  };

  return (
    // Outer container: White background, black text, centered, shadow
    <div className="p-8 bg-white text-black rounded-lg shadow-xl max-w-lg mx-auto my-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
      
      {/* --- Success Message --- */}
      {isSubmitted ? (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md text-center">
          ✅ Thank you, **{formData.name}**! Your message has been received.
        </div>
      ) : (
        /* --- Form Structure --- */
        <form onSubmit={handleSubmit}>
          
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
              required
            />
          </div>

          {/* 📞 Phone Number Field */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel" // Use 'tel' type for better mobile input experience
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(123) 456-7890"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
            />
          </div>

          {/* 💬 Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4" // Make the textarea taller
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black resize-none" // 'resize-none' prevents manual resizing
              required
            ></textarea>
          </div>

          {/* Submission Button (Yellow) */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-yellow-400 text-black font-bold rounded-md transition duration-150 ease-in-out hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default SubmissionForm;