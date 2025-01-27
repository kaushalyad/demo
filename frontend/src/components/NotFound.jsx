import React from "react";
import { NavLink } from "react-router-dom"; // If using React Router for navigation

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 w-[100vw]">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-red-600">404</h1>
        <p className="text-xl text-gray-700">
          Oops! The page you're looking for doesn't exist.
        </p>
        <NavLink
          to="/"
          className="mt-4 text-blue-500 hover:text-blue-700 underline"
        >
          Go back to Home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
