import React, { useState } from "react";
import Button from "./components/button";
import TextInput from "./components/textBox";
import "./App.css";
import CVPreview from "./components/cvPreview"; // Adjust the path if needed

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
  const [profile, setProfile] = useState("");
  const [experience, setExperience] = useState([
    {
      title: "",
      dateRange: "",
      bullets: [""],
    },
  ]);
  const [education, setEducation] = useState([
    {
      school: "",
      dateRange: "",
      degree: "",
    },
  ]);

  const [skills, setSkills] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileChange = (e) => {
    setProfile(e.target.value);
  };

  const handleExperienceChange = (index, field, value) => {
    const updated = [...experience];
    updated[index][field] = value;
    setExperience(updated);
  };

  const handleBulletChange = (expIndex, bulletIndex, value) => {
    const updated = [...experience];
    updated[expIndex].bullets[bulletIndex] = value;
    setExperience(updated);
  };

  const addBullet = (expIndex) => {
    const updated = [...experience];
    updated[expIndex].bullets.push("");
    setExperience(updated);
  };

  const addExperienceEntry = () => {
    setExperience([...experience, { title: "", dateRange: "", bullets: [""] }]);
  };

  const removeBullet = (expIndex, bulletIndex) => {
    const updated = [...experience];
    if (updated[expIndex].bullets.length > 1) {
      updated[expIndex].bullets.splice(bulletIndex, 1);
      setExperience(updated);
    }
  };

  const removeExperienceEntry = (index) => {
    const updated = [...experience];
    updated.splice(index, 1);
    setExperience(updated);
  };

  const handleEducationChange = (index, field, value) => {
    const updated = [...education];
    updated[index][field] = value;
    setEducation(updated);
  };

  const addEducationEntry = () => {
    setEducation([...education, { school: "", dateRange: "", degree: "" }]);
  };

  const removeEducationEntry = (index) => {
    const updated = [...education];
    updated.splice(index, 1);
    setEducation(updated);
  };

  const handleSkillChange = (index, value) => {
    const updated = [...skills];
    updated[index] = value;
    setSkills(updated);
  };

  const addSkill = () => {
    setSkills([...skills, ""]);
  };

  const removeSkill = (index) => {
    const updated = [...skills];
    updated.splice(index, 1);
    setSkills(updated);
  };

  return (
    <div className="app-container">
      <div className="input-section">
        <h2>CV Sections</h2>
        <Button
          text="Personal Details"
          onClick={() => setActiveSection("personalDetails")}
          className="section-button"
        />
        <Button
          text="Profile"
          onClick={() => setActiveSection("profile")}
          className="section-button"
        />
        <Button
          text="Experience"
          onClick={() => setActiveSection("experience")}
          className="section-button"
        />
        <Button
          text="Education"
          onClick={() => setActiveSection("education")}
          className="section-button"
        />
        <Button
          text="Skills"
          onClick={() => setActiveSection("skills")}
          className="section-button"
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
            <h3>Profile Summary</h3>
            <TextInput
              name="profile"
              value={profile}
              onChange={handleProfileChange}
              placeholder="Write a short personal statement..."
              style={{ width: "525px", height: "150px", padding: "6px" }}
              multiline
            />
          </div>
        )}

        {activeSection === "experience" && (
          <div>
            <h3>Experience</h3>
            {experience.map((exp, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "20px",
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "8px",
                  width: "543px",
                  backgroundColor: "#e8e8e8",
                }}
              >
                <input
                  type="text"
                  placeholder="Project Title"
                  value={exp.title}
                  onChange={(e) =>
                    handleExperienceChange(i, "title", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Start Date - End Date"
                  value={exp.dateRange}
                  onChange={(e) =>
                    handleExperienceChange(i, "dateRange", e.target.value)
                  }
                />

                <ul>
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "5px",
                      }}
                    >
                      <input
                        type="text"
                        placeholder={`Bullet point ${j + 1}`}
                        value={bullet}
                        onChange={(e) =>
                          handleBulletChange(i, j, e.target.value)
                        }
                        style={{ flex: 1 }}
                      />
                      <button
                        onClick={() => removeBullet(i, j)}
                        style={{
                          marginLeft: "8px",
                          marginRight: "53px",
                          marginTop: "-8px",
                          padding: "4px 8px",
                        }}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => addBullet(i)}
                  style={{ padding: "4px 8px" }}
                >
                  Add Bullet Point
                </button>
                <button
                  onClick={() => removeExperienceEntry(i)}
                  style={{
                    marginLeft: "10px",
                    color: "red",
                    padding: "4px 8px",
                  }}
                >
                  Delete Experience
                </button>
              </div>
            ))}
            <button
              onClick={addExperienceEntry}
              style={{ marginLeft: "10px", padding: "4px 8px" }}
            >
              Add Another Experience
            </button>
          </div>
        )}

        {activeSection === "education" && (
          <div>
            <h3>Education</h3>
            {education.map((edu, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "20px",
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "8px",
                  width: "543px",
                  backgroundColor: "#e8e8e8",
                }}
              >
                <input
                  type="text"
                  placeholder="School / University"
                  value={edu.school}
                  onChange={(e) =>
                    handleEducationChange(i, "school", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Start Date - End Date"
                  value={edu.dateRange}
                  onChange={(e) =>
                    handleEducationChange(i, "dateRange", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Degree / Program"
                  value={edu.degree}
                  onChange={(e) =>
                    handleEducationChange(i, "degree", e.target.value)
                  }
                />
                <br />
                <button
                  onClick={() => removeEducationEntry(i)}
                  style={{ marginTop: "5px", color: "red", padding: "4px 8px" }}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={addEducationEntry}
              style={{ marginLeft: "10px", padding: "4px 8px" }}
            >
              Add Another Education
            </button>
          </div>
        )}

        {activeSection === "skills" && (
          <div>
            <h3>Skills</h3>
            <ul>
              {skills.map((skill, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <input
                    type="text"
                    placeholder={`Skill ${i + 1}`}
                    value={skill}
                    onChange={(e) => handleSkillChange(i, e.target.value)}
                    style={{
                      flex: 1,
                      padding: "6px",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                    }}
                  />
                  <button
                    onClick={() => removeSkill(i)}
                    style={{
                      marginLeft: "8px",
                      padding: "6px",
                      color: "white",
                      backgroundColor: "red",
                      border: "none",
                      borderRadius: "4px",
                    }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={addSkill}
              style={{
                marginTop: "10px",
                padding: "8px 12px",
                borderRadius: "4px",
                border: "none",
                backgroundColor: "#007bff",
                color: "white",
              }}
            >
              Add Skill
            </button>
          </div>
        )}
      </div>
      <div className="preview-section">
        <h2 id="PreviewText">CV Preview</h2>
        <CVPreview
          personalDetails={personalDetails}
          profile={profile}
          experience={experience}
          education={education}
          skills={skills}
        />
      </div>
    </div>
  );
}

export default App;
