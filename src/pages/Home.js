import React, { Component } from "react";

import homeStyles from "../modules/home.module.scss";

import people from "../images/people.jpg";

import website from "../images/website.JPG";

import practice from "../images/practice.png";
import projects from "../images/projects.png";

class Home extends Component {
  render() {
    return (
      <div>
        <div className={homeStyles.titleContainer}>
          <h1 className={homeStyles.title}>Pearl Collective.</h1>
        </div>
        <div className={homeStyles.gridContainer}>
          <div className={homeStyles.overlay}>
            <h1 className={homeStyles.gridTitleOne}>
              How we can help your business.
            </h1>
            <p className={homeStyles.gridParagraphOne}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className={homeStyles.gridButtonOne}>SIGN UP</button>
          </div>
          <div>
            <img className={homeStyles.image} src={website} alt="website" />
          </div>
        </div>
        <div className={homeStyles.gridContainerTwo}>
          <div className={homeStyles.overlayTwo}>
            <h1 className={homeStyles.gridTitleTwo}>
              Are you a junior seeking employment?
            </h1>
            <p className={homeStyles.gridParagraphTwo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className={homeStyles.gridButtonTwo}>JOIN US</button>
          </div>

          <div>
            <img className={homeStyles.imageTwo} src={people} alt="people" />
          </div>
        </div>
        <div className={homeStyles.flexContainer}>
          <div className={homeStyles.flexbox}>
            <h1 className={homeStyles.flexTitle}>
              Helping businesses get ahead.
            </h1>
            <p className={homeStyles.flexParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <img
              className={homeStyles.projects}
              src={projects}
              alt="projects"
            />
            <button className={homeStyles.flexButtonOne}>PROJECTS</button>
          </div>
          <div className={homeStyles.flexbox}>
            <h1 className={homeStyles.flexTitle}>
              We simulate experience for juniors.
            </h1>
            <p className={homeStyles.flexParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <img
              className={homeStyles.practice}
              src={practice}
              alt="practice"
            />
            <button className={homeStyles.flexButtonTwo}>PRACTICE</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
