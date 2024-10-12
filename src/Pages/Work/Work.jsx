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
import Project2 from "../../Assets/Project2.png";
import Project3 from "../../Assets/Project3.png";
import Project4 from "../../Assets/Project4.png";
import flyers from "../../Assets/flyers.png";
import behance from "../../Assets/behance.png";
import "./Work.css";
import { motion } from "framer-motion";

function Work() {
  const [time, setTime] = useState(new Date());
  const [scrollY, setScrollY] = useState(0);
  const [isBatMan, setIsBatMan] = useState(false);
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  useEffect(() => {
    document.title = "Home";
  }, {});

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
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <div>
      <Navbar />
      <motion.div
        className="pagecontent"
        initial={{ opacity: 0, y: 50 }} // start with 0 opacity and below the screen
        animate={{ opacity: 1, y: 0 }} // animate to full opacity and original position
        transition={{ duration: 0.8, ease: "easeOut" }} // control speed and easing
      >
        <div className="First">
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
      </motion.div>
      <motion.div
        className="main-content"
        initial={{ opacity: 0, y: 50 }} // start with 0 opacity and below the screen
        animate={{ opacity: 1, y: 0 }} // animate to full opacity and original position
        transition={{ duration: 1.5, ease: "easeOut" }} // control speed and easing
      >
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // start with 0 opacity and below the screen
        animate={{ opacity: 1, y: 0 }} // animate to full opacity and original position
        transition={{ duration: 2.8, ease: "easeOut" }} // control speed and easing
      >
        <div className="Volhead">Volunteer Experience</div>
        <div className="VolExperiance">
          <img src={Volunteer} className="volunteer" alt="Logo" />
        </div>{" "}
      </motion.div>
      <br /> <br />
      <motion.div
        className="part_one second"
        initial={{ opacity: 0, y: 50 }} // start with 0 opacity and below the screen
        animate={{ opacity: 1, y: 0 }} // animate to full opacity and original position
        transition={{ duration: 3.0, ease: "easeOut" }} // control speed and easing
      >
        <div className="row">
          <div className="imgholder">
            <img src={Minuri2} className="Minuri2" alt="Logo" />
          </div>

          <div className="text-section">
            <div className="head_name">
              What makes me <span>different?</span>
            </div>

            <div className="description seconDes">
              I create unique software solutions with a strong focus on user
              experience, tailored to your needs and objectives. By merging
              creativity with functionality and leveraging cutting-edge
              technologies, I ensure every project not only works seamlessly but
              also delivers an exceptional user experience.
            </div>
          </div>
        </div>
      </motion.div>
      <div className="Volhead">My Projects</div>
      <br />
      <div
        className="projectSection"
        initial={{ opacity: 0, y: 50 }} // start with 0 opacity and below the screen
        animate={{ opacity: 1, y: 0 }} // animate to full opacity and original position
        transition={{ duration: 0.8, ease: "easeOut" }} // control speed and easing
      >
        <div className="card card1">
          <Link to="/Projects" className="LinkTest">
            <div className="project-card-outline">
              <div className="project-card-outline2">
                <div className="CardHead">
                  <div>
                    <div className="text-projectcard-title">Trophy</div>
                    <div className="text-projectcard-description">
                      Non-monetary token-based mobile application.
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

        <div className="card card2">
          <Link to="/Projects2" className="LinkTest">
            <div className="project-card-outline">
              <div className="project-card-outline2">
                <div className="CardHead">
                  <div>
                    <div className="text-projectcard-title">MoodWave</div>
                    <div className="text-projectcard-description">
                      Check the emotions of the music.
                    </div>
                  </div>
                  <div>
                    <img src={Arrow} className="Arrow" alt="Logo" />
                  </div>
                </div>
                <div className="Project_img">
                  <img src={Project2} className="Arrow32" alt="Logo" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="projectSection">
        <div className="card">
          <Link to="/Projects3" className="LinkTest">
            <div className="project-card-outline">
              <div className="project-card-outline2">
                <div className="CardHead">
                  <div>
                    <div className="text-projectcard-title">EDU</div>
                    <div className="text-projectcard-description">
                      Online Learning and Teaching Platform
                    </div>
                  </div>
                  <div>
                    <img src={Arrow} className="Arrow" alt="Logo" />
                  </div>
                </div>
                <div className="Project_img">
                  <img src={Project3} className="Arrow32" alt="Logo" />
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="card card3">
          <Link to="/Projects4" className="LinkTest">
            <div className="project-card-outline">
              <div className="project-card-outline2">
                <div className="CardHead">
                  <div>
                    <div className="text-projectcard-title">ShopSense</div>
                    <div className="text-projectcard-description">
                      Tap it Shop it
                    </div>
                  </div>
                  <div>
                    <img src={Arrow} className="Arrow" alt="Logo" />
                  </div>
                </div>
                <div className="Project_img">
                  <img src={Project4} className="Arrow32" alt="Logo" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="bigtextwrap">
        <div className="Bigtext1">
          Crafting the future as a<span> passionate </span> Software Engineer.
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
              <th>My Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nexo</td>
              <td>E commerce website</td>
              <td>-</td>
              <td>Prototype, Frontend, Backend</td>
            </tr>
            <tr>
              <td>MyJourney</td>
              <td>
                {" "}
                Travel planning app that simplifies the process based on your
                traveler category and budget.
              </td>
              <td>Disara</td>
              <td>Prototype, Frontend</td>
            </tr>

            <tr>
              <td>Helping Hand</td>
              <td>Hospital Management System</td>
              <td>-</td>
              <td>Prototype, Frontend, Backend</td>
            </tr>

            <tr>
              <td>ShopSense</td>
              <td>
                Mobile app leveraging AI to enhance online clothing shopping for
                the visually impaired, with an admin panel for sellers.
              </td>
              <td>
                Disara
                <br />
                Dushyantha
              </td>
              <td>Prototype, Frontend</td>
            </tr>

            <tr>
              <td>Industrial Chemistry</td>
              <td>
                Mobile application for learning Chemistry for Advanced Level
                students.
              </td>
              <td>Manuri</td>
              <td>IdearMart App</td>
            </tr>
            <tr>
              <td>My Portfolio Website</td>
              <td>Developed the website using React and CSS.</td>
              <td>-</td>
              <td>Prototype, Frontend, Backend</td>
            </tr>
            <tr>
              <td>Haven</td>
              <td>
                AI-powered, web-based platform that utilizes AI and virtual
                reality (VR) technology to promote mental well-being.{" "}
              </td>
              <td>Disara</td>
              <td>Prototype, Frontend</td>
            </tr>
            <tr>
              <td>Market Management System</td>
              <td>
                Developed a system for managing the billing process for a
                supermarket.
              </td>
              <td>-</td>
              <td>Frontend, Backend</td>
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
      <motion.div
        className="part_one second"
        initial={{ opacity: 0, y: 50 }} // start with 0 opacity and below the screen
        animate={{ opacity: 1, y: 0 }} // animate to full opacity and original position
        transition={{ duration: 3.0, ease: "easeOut" }} // control speed and easing
      >
        <div className="row">
          <div className="imgholder">
            <img src={Minuri3} className="Minuri2" alt="Logo" />
          </div>
          <div className="text-section">
            <div className="head_name">
              How I can help <span>you?</span>
            </div>
            <div className="description seconDes">
              Let’s collaborate to create something exceptional! I'm excited to
              connect over new opportunities in software engineering.
            </div>
            <div className="sentmailbtn">
              <a href="mailto:minurisenara@gmail.com" className="contactbtn">
                <div className="Touch">Get In Touch</div>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
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
