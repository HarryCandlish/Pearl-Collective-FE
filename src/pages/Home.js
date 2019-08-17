import React, { Component } from "react";

import homeStyles from "../modules/home.module.scss";

import people from "../images/people.jpg";

import website from "../images/website.JPG";

import practice from "../images/practice.png";
import projects from "../images/projects.png";
import tom from "../images/profile-1.jpg";
import sarah from "../images/sarah.jpg";
import kate from "../images/kate.jpg";
import bob from "../images/bob.jpg";

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
        <div className={homeStyles.personalContainer}>
          <div className={homeStyles.personalFlexbox}>
            <div className={homeStyles.profileContainer}>
              <img className={homeStyles.tom} src={tom} alt="tom" />
              <h1 className={homeStyles.tomFlexTitle}>Tom Golf</h1>
              <p className={homeStyles.tomEmail}>tomgolf@tomgolf.com</p>
            </div>
            <p className={homeStyles.tomPersonalFlexParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
          <div className={homeStyles.personalFlexbox}>
            <div className={homeStyles.profileContainer}>
              <img className={homeStyles.tom} src={bob} alt="bob" />
              <h1 className={homeStyles.bobFlexTitle}>Bob Myers</h1>
              <p className={homeStyles.tomEmail}>bobmyers@bobmyers.com</p>
            </div>
            <p className={homeStyles.tomPersonalFlexParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
          <div className={homeStyles.personalFlexbox}>
            <div className={homeStyles.profileContainer}>
              <img className={homeStyles.tom} src={sarah} alt="sarah" />
              <h1 className={homeStyles.sarahFlexTitle}>Sarah Stuart</h1>
              <p className={homeStyles.tomEmail}>sarahstuart@sarahstuart.com</p>
            </div>
            <p className={homeStyles.tomPersonalFlexParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
          </div>
          <div className={homeStyles.personalFlexbox}>
            <div className={homeStyles.profileContainer}>
              <img className={homeStyles.tom} src={kate} alt="kate" />
              <h1 className={homeStyles.kateFlexTitle}>Kate Wong</h1>
              <p className={homeStyles.tomEmail}>katewong@katewong.com</p>
            </div>
            <p className={homeStyles.tomPersonalFlexParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
