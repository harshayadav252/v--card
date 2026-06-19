import { useState } from "react";
import harshaPic from "./assets/HarshaPic.jpeg";
import "./App.css";
function ProfileCard() {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="scene">
      <div className={`card ${flipped ? "flipped" : ""}`}>
        <div className="front">
          <div className="header"></div>
          <div className="profile-img">
            <img src={harshaPic} alt="profile" />
          </div>
          <h2>Harsha Yadav</h2>
          <p className="role">Software Developer</p>
          <p className="desc">
 Passionate about Web Development, Java, Data Structures and building modern user interfaces using React.
</p>
          <button
            className="btn"
            onClick={() => setFlipped(true)}>
            View More
          </button>
        </div>
        <div className="back">
          <h2>Connect With Me</h2>
          <div className="buttons">
            <a
              href="https://github.com/harshayadav252"
              target="_blank"
              className="btn">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/harsha-y-26254a32a"
              target="_blank"
              className="btn">
              LinkedIn
            </a>
           <a href="/Resume.pdf" target="_blank" className="btn">
              Resume
            </a>
          </div>
          <button
            className="btn"
            onClick={() => setFlipped(false)}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
export default function App() {
  return (
    <div className="app">
      <ProfileCard />
    </div>
  );
}