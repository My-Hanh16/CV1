import React from "react";
import "./App.css";

function App() {
  const cv = {
    name: "Lê Thị Mỹ Hạnh",
    title: "Sinh viên CNTT",
    email: "lethimyhanhtamxuan@gmail.com",
    phone: "0774439827",
    address: "Đà Nẵng, Việt Nam",
    summary:
      "Tôi là một sinh viên yêu thích công nghệ, đam mê lập trình web và luôn muốn học hỏi thêm kiến thức mới.",
    skills: ["HTML", "CSS", "JavaScript", "React"]
  };

  return (
    <div className="cv-container">
      <div className="cv-header">
        <img
          src="anh1.jpg"
          alt="avatar"
          className="avatar"
        />
        <div>
          <h1>{cv.name}</h1>
          <h3>{cv.title}</h3>
        </div>
      </div>

      <div className="cv-info">
        <p>📧 {cv.email}</p>
        <p>📞 {cv.phone}</p>
        <p>📍 {cv.address}</p>
      </div>

      <div className="cv-summary">
        <h2>Giới thiệu</h2>
        <p>{cv.summary}</p>
      </div>

      <div className="cv-skills">
        <h2>Kỹ năng</h2>
        <ul>
          {cv.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
