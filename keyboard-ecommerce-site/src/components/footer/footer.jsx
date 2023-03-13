import "bootstrap/dist/css/bootstrap.min.css";

import "./footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faTwitch,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="content-container">Stay in touch!</div>

      <div className="bottom-row">
        <div className="logos-col">
          <a href="https://www.instagram.com/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="twitch.com">
            <FontAwesomeIcon icon={faTwitch} />
          </a>
          <a href="youtube.com">
            {" "}
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="discord.com">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </div>

        <div className="help"></div>

        <div className="newsletter-col">
          <form>
            <div className="form-control">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" />
            </div>
            <div className="form-actions">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>

      <div className="bottom-line">
        @ 2023 Barry's Boards | Custom Modified Mechanical Keyboards | Toronto,
        Canada
      </div>
    </div>
  );
};
