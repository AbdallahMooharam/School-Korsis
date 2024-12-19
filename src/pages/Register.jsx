import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setFormError('Passwords do not match');
      return;
    }
    setFormError('');
    alert('Registration successful!');
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white min-h-screen flex flex-col items-center justify-center py-12 px-6">
      <div className="w-full max-w-lg p-8 rounded-xl shadow-2xl bg-white bg-opacity-70">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Register for School Korsis</h2>

        {formError && <p className="text-red-500 text-center mb-4">{formError}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 text-black"
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 text-black"
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 text-black"
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 text-black"
              required
            />
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            >
              Register
            </button>
          </div>

          <div className="text-center">
            <p className="text-gray-600">Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login here</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
