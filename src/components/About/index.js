import { useEffect, useState } from "react";
import {
  faGitAlt,
  faPython,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Coding from "../../assets/images/coding.png";
import Robot from "../../assets/images/Robot.png";
import NodeJS from "../../assets/images/NodeJS.png";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass("text-animate-hover");
  //   }, 3000);
  // }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I am an aspiring Artificial Intelligence (AI) engineer with a strong
            foundation in algorithms, data structures, and practical experience
            in implementing machine learning projects. My passion for AI and
            advanced technologies drives my constant pursuit of knowledge and
            expertise in the field
          </p>
          <p align="LEFT">
            Currently, I am pursuing a degree in an interdisciplinary field, AI
            engineering, at Alamein International University (AIU)
          </p>
          <p></p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img
                src={Coding}
                alt="JavaScript Developer Name, Web Developer Name"
                style={{
                  width: "150px",
                  height: "150px",
                  marginLeft: "600px",
                  marginTop: "700px",
                  marginBottom: "500px",
                  marginRight: "450px",
                  rotate: "-90deg",
                }}
              />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="yellow" />
            </div>
            <div className="face3">
              <img
                src={Robot}
                alt="JavaScript Developer Name, Web Developer Name"
                style={{
                  width: "150px",
                  height: "150px",
                  marginLeft: "400px",
                  marginTop: "500px",
                  marginBottom: "500px",
                  marginRight: "450px",
                  // rotate: "-90deg",
                }}
              />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <img
                src={NodeJS}
                alt="NodeJS"
                style={{
                  width: "150px",
                  height: "150px",
                  marginLeft: "400px",
                  marginTop: "500px",
                  marginBottom: "500px",
                  marginRight: "450px",
                  // rotate: "-90deg",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
