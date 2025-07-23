import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmileBeam } from "@fortawesome/free-solid-svg-icons";

import "./header.css";
const HeaderBar = () => {
  const savedName = localStorage.getItem("user-name");
  return (
    <div>
      <header>
        <section className="header-bar">
          <div>
            <h4>
              Hiii {savedName} <FontAwesomeIcon icon={faSmileBeam} />
            </h4>
          </div>
          <div>
            <h1>ROCK - PAPER - SCISSORS</h1>
          </div>
          <div></div>
        </section>
      </header>
    </div>
  );
};
export default HeaderBar;
