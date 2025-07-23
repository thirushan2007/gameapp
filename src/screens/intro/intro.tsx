import { useState } from "react";
import "./intro.css";

const IntroPage = ({ namesaved }: { namesaved: () => any }) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name !== "") {
      localStorage.setItem("user-name", name);
      namesaved();
    } else {
      alert("Please enter a name");
    }
  };

  return (
    <div className="top-div">
      <div className="div-box">
        <div className="info-box">
          <h2>Heyy there Enter your Name:</h2>
          <input
            type="text"
            name="user-name"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button type="submit" onClick={handleSubmit}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
