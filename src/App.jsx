import React, { useState } from "react";
import Button from "./components/button";
import TextInput from "./components/textBox";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("personalDetails");
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    address: "",
    number: "",
    linkedin: "",
    github: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="app-container">
      <div className="input-section">
        <h2>CV Input</h2>
        <Button
          text="Personal Details"
          onClick={() => setActiveSection("personalDetails")}
        />
        <Button
          text="Profile" 
          onClick={() => setActiveSection("profile")} 
        />
        <Button
          text="Experience"
          onClick={() => setActiveSection("experience")}
        />
        <Button
          text="Education"
          onClick={() => setActiveSection("education")}
        />
        <Button 
          text="Skills" 
          onClick={() => setActiveSection("skills")} 
        />

        {/* Add more buttons for other sections as needed */}

        {activeSection === "personalDetails" && (
          <div>
            <h3>Personal Details</h3>
            <TextInput
              name="name"
              value={personalDetails.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
            />
            <TextInput
              name="email"
              value={personalDetails.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
            <TextInput
              name="address"
              value={personalDetails.address}
              onChange={handleInputChange}
              placeholder="Enter your address"
            />
            <TextInput
              name="number"
              value={personalDetails.number}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
            />
            <TextInput
              name="linkedin"
              value={personalDetails.linkedin}
              onChange={handleInputChange}
              placeholder="Enter your LinkedIn"
            />
            <TextInput
              name="github"
              value={personalDetails.github}
              onChange={handleInputChange}
              placeholder="Enter your phone Github"
            />
          </div>
        )}

        {activeSection === "profile" && (
          <div>
            <h3>Profile</h3>
            {/* Add input fields for education details here */}
          </div>
        )}

        {activeSection === "experience" && (
          <div>
            <h3>Experience</h3>
            {/* Add input fields for education details here */}
          </div>
        )}

        {activeSection === "education" && (
          <div>
            <h3>Education</h3>
            {/* Add input fields for education details here */}
          </div>
        )}

        {activeSection === "skills" && (
          <div>
            <h3>Skills</h3>
            {/* Add input fields for education details here */}
          </div>
        )}
      </div>
      <div className="preview-section">
        <h2>CV Preview</h2>
        {/* Render the CV preview here */}
      </div>
    </div>
  );
}

export default App;
