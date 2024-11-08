"use client";

import React, { useState } from "react";
import Link from "next/link";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!formData.username) {
    setError("Username is required.");
    setSuccess("");
  } else if (!emailPattern.test(formData.email)) {
    setError("Please enter a valid email address.");
    setSuccess("");
  } else if (formData.password.length < 6) {
    setError("Password must be at least 6 characters.");
    setSuccess("");
  } else {
    setError("");
    setSuccess("");

    try {
      const response = await fetch('http://<your-backend-url>/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  }
};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Create an Account</h1>
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        {/* Username Field */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 focus:outline-none focus:shadow-outline"
            placeholder="Enter your username"
            required
          />
        </div>
        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            required
          />
        </div>
        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
            required
          />
        </div>
        {/* Error and Success Messages */}
        {error && <p className="text-red-500 text-xs italic mb-2">{error}</p>}
        {success && <p className="text-green-500 text-xs italic mb-2">{success}</p>}
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
      </form>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600 dark:text-blue-400 hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default Register;

