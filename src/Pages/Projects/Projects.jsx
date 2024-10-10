import "./Projects.css";
import Arrow from "../../Assets/right-arrow.png";
import Procover1 from "../../Assets/Project1Cover.png";
import pro1 from "../../Assets/Pro1.png";
import ProImg from "../../Assets/ProImg.png";
import React from "react";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  const BackButton = () => {
    const navigate = useNavigate();
  };
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="AboutSec1">
      <div className="button-project-back" onClick={handleBack}>
        {" "}
        <div>
          <img src={Arrow} className="Arrow" alt="Right Arrow" />
        </div>
        <div className="text-button">Back</div>
      </div>

      <div className="text-hero project-title">Trophy</div>
      <div className="text-projectpage-year">
        Non-monetary token-based mobile application.
      </div>

      <div className="Project_img cover">
        <img
          src={Procover1}
          className="Procover"
          alt="Screenshot of Project 1"
        />
      </div>

      <div className="container-overview">
        <div
          id="w-node-bb7f0fce-bf27-8d8f-e59b-dc1cf4c393e6-f6d44990"
          className="overview-left"
        >
          <div className="overview-text-wrapper role-right-indent">
            <div className="text-overview-overline">My Role</div>
            <div className="text-projectpage-body">
              <span className="text-highlighted-body">
                Developer , UI/UX designer
              </span>{" "}
              — Working on Prototype , Complete the Activities,Hachathon,Sports
              , Clubs section of the Application
            </div>
          </div>
          <br />
          <div className="overview-text-wrapper">
            <div className="text-overview-overline">Team</div>
            <div className="text-projectpage-body team">
              Disara Mapalagama
              <br />
              Navindu
              <br />
              Dushyantha
            </div>
          </div>{" "}
          <br />
          <div className="overview-text-wrapper">
            <div className="text-overview-overline">Timeline &amp; Status</div>
            <div className="text-projectpage-body">3 Months</div>
          </div>
        </div>
        <div
          id="w-node-ed50f48e-4c98-79fb-4846-00baefdc27d6-f6d44990"
          className="overview-right"
        >
          <div className="overview-text-wrapper">
            <div className="text-overview-overline">Overview</div>
            <div className="text-projectpage-body">
              “Trophy” is a non-monetary token-based employee loyalty rewarding
              mobile application solution to maintain the company’s employees’
              sense of community and improve the team member experience in the
              office with more interactivity, inclusivity, and motivation.
              <br />
              <br />
              Trophy is gamified to give a sense of relaxation to the employees
              by collecting the tokens, which are named “Coins”. The company’s
              top management decides the value of a Coin, how many tokens can be
              earned by each activity, and how and when employees are allowed to
              redeem the tokens.
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className="GrapicSection">
        <a
          className="Grapicscard"
          target="_blank"
          rel="noopener noreferrer"
          href="#"
        >
          <div className="headGrapic">Solution</div>
        </a>
      </div>
      <br />
      <div className="double-column-block">
        <div className="text-projectpage-subheading">1. Motivation </div>
        <div className="content-trailing">
          <div className="text-projectpage-body">
            The motivation to develop Trophy arose from the observation that a
            motivated workforce is crucial for productivity and retention within
            an organization in order to reach its goals and objectives.
            Traditional reward systems often fail to ensure that employees
            engage in extracurricular activities effectively. By implementing a
            gamified token system, Trophy aims to transform the workplace into a
            community where employees feel valued and connected. This approach
            intends to foster a culture of appreciation where employees actively
            engage in activities that benefit both
            <span className="text-figure-body">
              themselves and the organization.
            </span>
            <span className="text-highlighted-body">
              a (very messy) horizontal.
            </span>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="double-column-block">
        <div className="text-projectpage-subheading">2. Features </div>
        <div className="content-trailing">
          <div className="text-projectpage-body">
            <span className="text-highlighted-body">• Earning Coins</span>{" "}
            <br />
            The employees can earn Coins by carpooling with colleagues, engaging
            in extracurricular activities such as workshops and leadership
            development programs, hackathons, sports events, writing and posting
            blogs, taking AI powered therapy sessions, and spinning the Fortune
            Wheel three times per day.
            <br />
            <br />
            <span className="text-highlighted-body">• Redeeming Coins </span>
            <br />
            The Coins earned can be redeemed at the office canteen, to reserve
            parking spots, for Electric Vehicle charging, to reserve activities
            in the play area, and to reserve the sports courts (basketball,
            tennis, etc.) Also, Coins could be used as a form of gift for their
            colleagues to show their appreciation and support.
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="container-highlights ">
        <div className="Project_img">
          <img src={ProImg} alt="Screenshot of Project 1" />
        </div>

        <div className="text-projectpage-year">
          Google, Stadia — September '22
        </div>
        <div className="TitleScreen">
          Trophy - Employee Loyalty Rewarding System
        </div>
        <div>
          <img src={pro1} className="pro1" alt="Screenshot of Project 1" />
        </div>

        <div>
          <img src={pro1} className="pro1" alt="Screenshot of Project 1" />
        </div>

        <div>
          <img src={pro1} className="pro1" alt="Screenshot of Project 1" />
        </div>

        <div className="line">""</div>

        <div className="TitleScreen">This is an archived project.</div>
        <div className="text-projectpage-year">
          Google, Stadia — September '22
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="line2">""</div>
      <br />
      <br />
      <div class="text-projectpage-heading next-project">Next project:</div>
      <br />
      <br />
      <div className="card nextpro">
        <div className="project-card-outline">
          <div className="project-card-outline2">
            <div className="CardHead">
              <div>
                <div className="text-projectcard-title">Stadia Bluetooth</div>
                <div className="text-projectcard-description">
                  Giving a second life to over a million controllers.
                </div>
              </div>
              <div>
                <img src={Arrow} className="Arrow" alt="Arrow Icon" />
              </div>
            </div>
            <div className="Project_img">
              <img
                src={Procover1}
                className="Arrow32"
                alt="Stadia Bluetooth Project"
              />
            </div>
          </div>
        </div>
      </div>

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

export default Projects;
