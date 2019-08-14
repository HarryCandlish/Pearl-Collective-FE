import React, { Component } from "react";

import homeStyles from "../modules/home.module.scss";

import projects from "../images/projects.png";
import team from "../images/team.png";
import practice from "../images/practice.png";

import business from "../images/business.jpg";
import people from "../images/people.jpg";
import info from "../images/info.png";

class Home extends Component {
  render() {
    return (
      <div>
        <div className={homeStyles.titleContainer}>
          <h1 className={homeStyles.title}>PEARL COLLECTIVE.</h1>
        </div>
        <div className={homeStyles.gridContainer}>
          <div className={homeStyles.itemOne}>
            <img className={homeStyles.workImage} alt="alt" src={business} />
          </div>
          <div className={homeStyles.overlay}>
            <h1 className={homeStyles.gridTitleOne}>
              HOW WE CAN HELP YOUR BUSINESS.
            </h1>
            <p className={homeStyles.gridParagraphOne}>
              If you own, manage a small-business, non-profit, or social
              enterprise, we'll set you up with junior developers and designers
              willing to volunteer their services and skills.
            </p>
            <button className={homeStyles.gridButtonOne}>SIGN UP</button>
          </div>
          <div className={homeStyles.gridContainerTwo}>
            <div className={homeStyles.itemTwo}>
              <img className={homeStyles.teamImage} alt="alt" src={people} />
            </div>
            <div className={homeStyles.overlayTwo}>
              <h1 className={homeStyles.gridTitleTwo}>
                HOW WE CAN HELP YOU FIND EMPLOYMENT.
              </h1>
              <p className={homeStyles.gridParagraphTwo}>
                Our goal is to simulate experience to better prepare juniors for
                finding employment. You'll meet with clients, design, promote
                web presence and develop websites for companies in Wellington.
              </p>
              <button className={homeStyles.gridButtonTwo}>JOIN US</button>
            </div>
          </div>
        </div>
        <div>
          <div className={homeStyles.containerFour}>
            <div className={homeStyles.infoContainer}>
              <div className={homeStyles.infoContainerTitle}>
                <h1 className={homeStyles.infoTitle}>PEARL COLLECTIVE.</h1>
              </div>
              <p className={homeStyles.info}>
                Our service works to provide small, non-profit businesses, and
                social enterprises with websites. We write content, design, meet
                with clients and develop the product. All developers, designers,
                project managers, are juniors seeking experience to find
                employment, and we work to simulate the experience of working
                for a company.
              </p>
              <img className={homeStyles.infoImage} alt="info" src={info} />
            </div>
          </div>
        </div>
        <ul className={homeStyles.container}>
          <li className={homeStyles.flexbox}>
            <img
              className={homeStyles.imageProjects}
              alt="projects"
              src={projects}
            />

            <button className={homeStyles.buttonOne}>PROJECTS</button>
            <p className={homeStyles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </li>
          <li className={homeStyles.flexbox}>
            <img className={homeStyles.imageTeam} alt="team" src={team} />
            <button className={homeStyles.buttonTwo}>TEAM</button>
            <p className={homeStyles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </li>
          <li className={homeStyles.flexbox}>
            <img
              className={homeStyles.imagePractice}
              alt="practice"
              src={practice}
            />
            <button className={homeStyles.buttonThree}>PRACTICE</button>
            <p className={homeStyles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </li>{" "}
        </ul>
      </div>
    );
  }
}

export default Home;
