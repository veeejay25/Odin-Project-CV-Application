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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum."}
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
                <span>{exp.dateRange || "2021 - 2024"}</span>
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
                  <span>{edu.dateRange || "2021 - 2024"}</span>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          )}
        </div>
      </div>

      <style jsx>{`
        .resume-preview {
          font-family: "Arial", sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          color: #333;
          line-height: 1.5;
        }

        .resume-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          border-bottom: 1px solid black;
        }

        .resume-header h1 {
          text-transform: uppercase;
          letter-spacing: 2px;
          margin: 0;
          font-size: 24px;
        }

        .contact-info {
          font-size: 14px;
          margin-bottom: 10px;
          text-align: center;
          font-style: italic;
        }

        .resume-section p {
          margin: 0 0 10px 0;
        }

        .resume-section {
          border-bottom: 1px solid black;
        }

        .resume-section h2 {
          text-transform: uppercase;
          font-size: 16px;
          margin: 0;
        }

        .experience-entry {
          margin-bottom: 15px;
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
          display: flex;
          flex-wrap: wrap;
          list-style-type: none;
        }

        .skills-list li {
          margin-right: 15px;
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
        }

        .skills-column {
          margin-right: 10px;
        }
      `}</style>
    </div>
  );
};

export default CVPreview;
