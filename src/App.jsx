import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InstructionPage from "./components/InstructionPage";
import TestPage from "./components/TestPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Instruction Page */}
        <Route
          path="/"
          element={
            <InstructionPage
              collegeName="XYZ University"
              subject="Design Patterns"
              duration={120}
              totalMarks={80}
            />
          }
        />
        {/* Test Page */}
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </Router>
  );
};

export default App;
