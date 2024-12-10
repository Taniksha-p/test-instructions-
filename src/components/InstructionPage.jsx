import React from "react";
import { useNavigate } from "react-router-dom";

const InstructionPage = ({ collegeName, subject, duration, totalMarks }) => {
  const navigate = useNavigate();

  const handleStartTest = () => {
    navigate("/test");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex items-center justify-center p-6">
      <div className="bg-gray-800 shadow-xl rounded-3xl p-8 max-w-2xl w-full transform transition hover:scale-105">
        <h1 className="text-3xl font-bold text-center text-emerald-400 mb-6">
          Welcome to {collegeName}
        </h1>
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-gray-300">
            Subject: {subject}
          </h2>
          <p className="text-gray-400 mt-2">
            Duration: <span className="font-medium">{duration} minutes</span> | Total Marks:{" "}
            <span className="font-medium">{totalMarks}</span>
          </p>
        </div>

        <div className="bg-gray-700 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-bold text-emerald-400 mb-4">Test Instructions</h3>
          <ul className="list-inside list-disc text-gray-300 space-y-3">
            <li>Read all questions carefully before answering.</li>
            <li>Ensure a stable internet connection during the test.</li>
            <li>Do not refresh or close the browser during the test.</li>
            <li>Once the test starts, it cannot be paused.</li>
            <li>All questions are compulsory unless specified otherwise.</li>
          </ul>
        </div>

        <button
          onClick={handleStartTest}
          className="mt-8 w-full bg-gradient-to-r from-emerald-500 to-green-600 text-gray-900 text-lg font-medium py-3 rounded-full shadow-lg hover:shadow-xl transform transition hover:scale-105"
        >
          Start Test
        </button>
      </div>
    </div>
  );
};

export default InstructionPage;
