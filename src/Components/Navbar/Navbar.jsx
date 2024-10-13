import "./Navbar.css";
import Logo from "../../Assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react"; // Import useState for managing menu state

function Navbar() {
  const location = useLocation(); // Correctly call useLocation
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  // Determine the active section based on the current URL path
  const isWorkPage = location.pathname === "/Work";
  const isInfoPage = location.pathname === "/Info";

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="section-nav">
      <div className="Navbar">
        <div className="logo-block Navbarfix">
          <img src={Logo} className="logomark" alt="Logo" />
          <div className="LogoText">
            <div className="text-logo">Minuri Senara</div>
            <div className="text-underlogo">Full Stack Developer</div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className={`nav-pill-wrapper ${isMenuOpen ? "active" : ""}`}>
          <div
            className={`nav-indicator-glow ${
              isWorkPage ? "glow-work" : isInfoPage ? "glow-info" : ""
            }`}
          ></div>

          <div className="nav-pill">
            <Link to="/Work" className="nav-toggle work w-inline-block">
              <div className="text-nav-toggle">Work</div>
            </Link>
            <Link to="/Info" className="nav-toggle w-inline-block">
              <div className="text-nav-toggle">Info</div>
            </Link>
            <div className="nav-indicator-pill"></div>
          </div>
        </div>

        <div className="nav-pill pil2">
          <div
            className="nav-toggle work w-inline-block "
            onClick={toggleDropdown}
          >
            <div className="text-nav-toggle">@</div>
          </div>
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div>
              <div
                className="mobile-popup-menu"
                style={{
                  display: "flex",
                }}
              >
                <a
                  href="https://www.linkedin.com/in/mshewage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="popup-menu-item w-inline-block"
                >
                  <div className="text-popup-menu">LinkedIn</div>
                  <img
                    src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644ca61c76573b18898f41f8_icon-open.svg"
                    loading="lazy"
                    alt="LinkedIn icon"
                    className="icon-popup-external"
                  />
                </a>
                <a
                  href="https://drive.google.com/file/d/167oQtkvzh5bpspC_XLpRthUL3fq0th1F/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="popup-menu-item w-inline-block"
                >
                  <div className="text-popup-menu">Resume</div>
                  <img
                    src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644ca61c76573b18898f41f8_icon-open.svg"
                    loading="lazy"
                    alt="Resume icon"
                    className="icon-popup-external"
                  />
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="nav-right-wrapper">
          <div className="chip-socials-wrapper">
            <a
              href="https://www.linkedin.com/in/mshewage/"
              target="_blank"
              rel="noopener noreferrer"
              className="chip-socials w-inline-block"
            >
              <div className="text-socialnav">LinkedIn</div>
              <img
                src="https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg"
                loading="lazy"
                alt="External"
                className="icon-external"
              />
            </a>
            <a
              href="https://drive.google.com/file/d/167oQtkvzh5bpspC_XLpRthUL3fq0th1F/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="chip-socials w-inline-block"
            >
              <div className="text-socialnav">Resume</div>
              <img
                src="https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg"
                loading="lazy"
                alt="External"
                className="icon-external"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
