import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Logo from "../../Assets/Logo.png";
import Minuri from "../../Assets/Minuri.png";
import Mini_Logo from "../../Assets/Mini_Logo.png";
import email from "../../Assets/email.png";
import instergram from "../../Assets/instagram.png";
import sky from "../../Assets/Sky.jpg";
import Volunteer from "../../Assets/Volunteer.png";
import Minuri2 from "../../Assets/Minuri2.png";
import Minuri3 from "../../Assets/Minuri3.png";
import Arrow from "../../Assets/right-arrow.png";
import Arrow2 from "../../Assets/Arrow2.png";
import Project1 from "../../Assets/Project1.png";
import flyers from "../../Assets/flyers.png";
import behance from "../../Assets/behance.png";
import "./Work.css";

function Work() {
  const [time, setTime] = useState(new Date());
  const [scrollY, setScrollY] = useState(0);
  const [isBatMan, setIsBatMan] = useState(false);
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSwitch = () => {
    setIsBatMan(!isBatMan);
  };

  return (
    <div>
      <Navbar />s
      <div className="pagecontent">
        <div>
          <div className="main-head">
            Solving real-world problems through elegant
          </div>
          <div className="Second-head">code and design...</div>
        </div>

        <div className="Date-time-section">
          <div>
            {time.toLocaleDateString("en-US", {
              weekday: "long",
              month: "short",
              day: "numeric",
            })}
          </div>

          <div>
            {time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="part_one ">
          <div className="first_bar">
            <div className="logo-block">
              <img src={Mini_Logo} className="logomark2" alt="Logo" />
              <div className="LogoText">
                <div className="text-logo">Hey, I’m Minuri.</div>
                <div className="text-underlogo">Developer</div>
              </div>
            </div>
            <div className="button_section">
              <div className="Logo_Social1">
                <a href="https://www.behance.net/minurihewage" target="_blank">
                  <img src={behance} className="logomark" alt="Logo" />
                </a>
              </div>

              <div className="Logo_Social2">
                <a
                  href="https://www.instagram.com/minuri_senara/?next=%2F"
                  target="_blank"
                >
                  <img src={instergram} className="logomark" alt="Logo" />{" "}
                </a>
              </div>
              <a href="mailto:minurisenara@gmail.com" className="contactbtn">
                <div className="Touch">Get In Touch</div>
              </a>
            </div>
          </div>
          <div className="head_name">
            Obsessed with crafting <span>seamless </span>
            <br /> software solutions.
          </div>
          <div className="description">
            Hey, I'm Minuri, welcome to my world. I love building innovative and
            scalable
            <br /> software solutions that solve real-world problems.
          </div>
          <br />
        </div>

        <div className="part_two grediant">
          <div className="image-wrapper">
            <img
              src={Minuri}
              className="logomarkme"
              alt="Minuri"
              style={{
                top: scrollY * 0.2 + "px",
              }}
            />
          </div>
        </div>
      </div>
      <div className="Volhead">Volunteer Experience</div>
      <div className="VolExperiance">
        <img src={Volunteer} className="volunteer" alt="Logo" />
      </div>{" "}
      <br /> <br />
      <div className="part_one second">
        <div className="row">
          <div className="imgholder">
            <img src={Minuri2} className="Minuri2" alt="Logo" />
          </div>

          <div className="text-section">
            <div className="head_name">
              What makes me <span>different?</span>
            </div>

            <div className="description seconDes">
              I create unique digital experiences tailored to your brand and
              goals. By merging creativity with functionality and staying ahead
              of design trends, I ensure every project not only looks stunning
              but also performs flawlessly.
            </div>
          </div>
        </div>
      </div>
      <div className="Volhead">My Projects</div>
      <br />
      <div className="projectSection">
        <div className="card">
          <Link to="/Projects2" className="LinkTest">
            <div className="project-card-outline">
              <div className="project-card-outline2">
                <div className="CardHead">
                  <div>
                    <div className="text-projectcard-title">
                      Stadia Bluetooth
                    </div>
                    <div className="text-projectcard-description">
                      Giving a second life to over a million cont
                    </div>
                  </div>
                  <div>
                    <img src={Arrow} className="Arrow" alt="Logo" />
                  </div>
                </div>
                <div className="Project_img">
                  <img src={Project1} className="Arrow32" alt="Logo" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link to="/Projects3" className="LinkTest">
            <div className="project-card-outline">
              <div className="project-card-outline2">
                <div className="CardHead">
                  <div>
                    <div className="text-projectcard-title">
                      Stadia Bluetooth
                    </div>
                    <div className="text-projectcard-description">
                      Giving a second life to over a million cont
                    </div>
                  </div>
                  <div>
                    <img src={Arrow} className="Arrow" alt="Logo" />
                  </div>
                </div>
                <div className="Project_img">
                  <img src={Project1} className="Arrow32" alt="Logo" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="projectSection">
        <div className="card">
          <Link to="/Projects4" className="LinkTest">
            <div className="project-card-outline">
              <div className="project-card-outline2">
                <div className="CardHead">
                  <div>
                    <div className="text-projectcard-title">
                      Stadia Bluetooth
                    </div>
                    <div className="text-projectcard-description">
                      Giving a second life to over a million cont
                    </div>
                  </div>
                  <div>
                    <img src={Arrow} className="Arrow" alt="Logo" />
                  </div>
                </div>
                <div className="Project_img">
                  <img src={Project1} className="Arrow32" alt="Logo" />
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="card">
          <Link to="/Projects" className="LinkTest">
            <div className="project-card-outline">
              <div className="project-card-outline2">
                <div className="CardHead">
                  <div>
                    <div className="text-projectcard-title">
                      Stadia Bluetooth
                    </div>
                    <div className="text-projectcard-description">
                      Giving a second life to over a million cont
                    </div>
                  </div>
                  <div>
                    <img src={Arrow} className="Arrow" alt="Logo" />
                  </div>
                </div>
                <div className="Project_img">
                  <img src={Project1} className="Arrow32" alt="Logo" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="bigtextwrap">
        <div className="Bigtext1">
          Designer with a passion for<span> shaping </span>the digital world.
        </div>
      </div>
      <div className="Volhead">Other Projects</div>
      <br />
      <br />
      <div className="OtherProjectHolder">
        <table id="interactiveTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Team</th>
              <th>Work</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Trophy</td>
              <td>Trophy is one of the mobile applications related to HR.</td>
              <td>Disara</td>
              <td>Prototype, Frontend, Backend</td>
            </tr>
            <tr>
              <td>Trophy</td>
              <td>Trophy is one of the mobile applications related to HR.</td>
              <td>Disara</td>
              <td>Prototype, Frontend, Backend</td>
            </tr>

            <tr>
              <td>Trophy</td>
              <td>Trophy is one of the mobile applications related to HR.</td>
              <td>Disara</td>
              <td>Prototype, Frontend, Backend</td>
            </tr>

            <tr>
              <td>Trophy</td>
              <td>Trophy is one of the mobile applications related to HR.</td>
              <td>Disara</td>
              <td>Prototype, Frontend, Backend</td>
            </tr>
            <tr>
              <td>Trophy</td>
              <td>Trophy is one of the mobile applications related to HR.</td>
              <td>Disara</td>
              <td>Prototype, Frontend, Backend</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div className="GrapicSection">
        <a
          className="Grapicscard"
          href="https://www.behance.net/minurihewage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={flyers} className="flyers" alt="Logo" />
          <div className="headGrapic">Branding</div>
        </a>
      </div>
      <br />
      <br />
      <br />
      <div className="part_one second">
        <div className="row">
          <div className="text-section contact">
            <div className="head_name">
              How I can help <span>you?</span>
            </div>

            <div className="description seconDes">
              Let's collaborate and craft something extraordinary together.
              Whether you're envisioning a project or simply want to reach out,
              I'm always excited about new opportunities and conversatio
            </div>
            <div className="sentmailbtn">
              <a href="mailto:minurisenara@gmail.com" className="contactbtn">
                <div className="Touch">Get In Touch</div>
              </a>
            </div>
          </div>

          <div className="imgholder">
            <img src={Minuri3} className="Minuri3" alt="Logo" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div
        data-w-id="ee1e9c3e-a1c6-2190-15b3-1daea0409ed7"
        className="section-footer"
      >
        <div className="container-footer">
          <div className="footer-bottom-wrapper">
            <div className="footer-bottom-left">
              <div className="text-footer-copyright">
                © 2024 Minuri Senara. All Rights Reserved.
              </div>
              <div className="text-under-copyright">
                Made with Love and Music (in every note, feel the heat).
              </div>
            </div>
            <div className="footer-bottom-right">
              <div className="text-last-updated">
                {" "}
                Last updated by Minuri on April 15, 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
