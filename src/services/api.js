import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const InstructionPage = () => {
  const [testDetails, setTestDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTestDetails = async () => {
      try {
        const response = await fetch("YOUR_API_ENDPOINT_HERE"); 
        const data = await response.json();
        setTestDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching test details:", error);
        setLoading(false);
      }
    };

    fetchTestDetails();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-2xl font-bold text-center mb-6">
          {testDetails.collegeName}
        </h1>
        <h2 className="text-lg font-semibold text-gray-700 text-center">
          Subject: {testDetails.subject}
        </h2>
        <p className="text-gray-500 text-center mb-4">
          Duration: {testDetails.duration} minutes | Total Marks:{" "}
          {testDetails.totalMarks}
        </p>
        <div className="border-t border-gray-300 pt-6">
          <h3 className="text-lg font-semibold mb-4">Instructions:</h3>
          <ul className="list-decimal pl-5 space-y-2 text-gray-700">
            {testDetails.instructions.map((inst, index) => (
              <li key={index}>{inst}</li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => navigate("/test")}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full"
        >
          Start Test
        </button>
      </div>
    </div>
  );
};

export default InstructionPage;
