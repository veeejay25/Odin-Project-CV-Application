const CVPreview = ({
  personalDetails,
  profile,
  experience,
  education,
  skills,
}) => {
  return (
    <div className="resume-preview">
      <div className="resume-header">
        <h1>{personalDetails.name || "John Doe"}</h1>
        <div className="contact-info">
          <span>{personalDetails.number || "123456789"} | </span>
          <span>{personalDetails.email || "doe.john@gmail.com"} | </span>
          <span>{personalDetails.address || "123 Main St, Anytown"} | </span>
          <span>
            linkedin.com/in/{personalDetails.linkedin || "john-doe"} |
          </span>
          <span> github.com/{personalDetails.github || "johndoe"}</span>
        </div>
      </div>

      <div className="resume-section">
        <h2>PROFILE</h2>
        <p>
          {profile ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
              "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut " +
              "enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
              "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
              "reprehenderit in voluptate velit esse cillum dolore eu fugiat " +
              "nulla pariatur. Excepteur sint occaecat cupidatat non proident, " +
              "sunt in culpa qui officia deserunt mollit anim id est laborum."}
        </p>
      </div>

      {/* Experience Section */}
      <div className="resume-section">
        <h2>EXPERIENCE</h2>
        {experience.length > 0 ? (
          experience.map((exp, i) => (
            <div key={i} className="experience-entry">
              <div className="experience-header">
                <strong>{exp.title || "Position/Project"}</strong>
                <span>{exp.dateRange || "Start Date - End Date"}</span>
              </div>
              <ul>
                {exp.bullets.map((bullet, j) => (
                  <li key={j}>
                    {bullet || "Description of responsibility/achievement"}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        )}
      </div>

      <div className="resume-section two-columns">
        <div className="education-column">
          <h2>EDUCATION</h2>
          {education.length > 0 ? (
            education.map((edu, i) => (
              <div key={i} className="education-entry">
                <strong>{edu.school || "School/University"}</strong>
                <div>
                  <span>{edu.dateRange || "Start Date - End Date"}</span>
                  <br />
                  <span>{edu.degree || "Degree/Program"}</span>
                </div>
              </div>
            ))
          ) : (
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          )}
        </div>
        <div className="skills-column">
          <h2>SKILLS</h2>
          {skills.length > 0 ? (
            <ul className="skills-list">
              {skills.map((skill, i) => (
                <li key={i}>{skill || "Skill"}</li>
              ))}
            </ul>
          ) : (
            <p>Skills</p>
          )}
        </div>
      </div>

      <style jsx>{`
        :root {
          --font-family: "Arial", sans-serif;
          --primary-color: #333;
          --secondary-color: #555;
          --border-color: black;
          --header-font-size: 24px;
          --section-font-size: 16px;
          --line-height: 1.5;
          --margin-bottom: 10px;
        }

        .resume-preview {
          font-family: var(--font-family);
          width: 210mm; /* A4 width */
          height: 297mm; /* A4 height */
          margin: 0 auto;
          padding: 20mm; /* Add some padding */
          color: var(--primary-color);
          line-height: var(--line-height);
          box-shadow: 0 0 5mm rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
          overflow: hidden; /* Hide overflow */
          background-color: white; /* Ensure background is white */
        }

        .resume-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          border-bottom: 1px solid var(--border-color);
        }

        .resume-header h1 {
          text-transform: uppercase;
          letter-spacing: 2px;
          margin: 0;
          font-size: var(--header-font-size);
        }

        .contact-info {
          font-size: 14px;
          margin-bottom: var(--margin-bottom);
          text-align: center;
          font-style: italic;
        }

        .resume-section P {
          margin: 0;
          margin-bottom: 10px;
        }

        .resume-section {
          border-bottom: 1px solid var(--border-color);
          margin-bottom: var(--margin-bottom);
          margin: 0;
        }

        .resume-section h2 {
          text-transform: uppercase;
          font-size: var(--section-font-size);
          margin: 0;
        }

        .experience-entry {
          margin-bottom: 10px;
        }

        .experience-header {
          display: flex;
          align-items: center;
          margin-bottom: 5px;
        }

        .experience-header strong,
        .experience-header span {
          margin-right: 10px;
        }

        .skills-list {
          list-style-type: disc;
          padding-left: 20px;
        }

        .skills-list li {
          margin-bottom: 5px;
        }

        ul {
          padding-left: 20px;
          margin: 5px 0;
        }

        li {
          margin-bottom: 3px;
        }

        .two-columns {
          display: flex;
          justify-content: space-between;
          border-bottom: none;
        }

        .skills-column,
        .education-column {
          flex: 1;
          min-width: 45%; /* Ensure columns have a minimum width */
        }

        .skills-column {
          margin-left: 10px; /* Add margin to separate from education column */
        }
      `}</style>
    </div>
  );
};

export default CVPreview;
