import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import Mohamed from "../../assets/images/Mohamed.jpg";
import Me1 from "../../assets/images/me1.png";
import Logo from "./Logo";
import "./index.scss";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = [
    "o",
    "h",
    "a",
    "m",
    "e",
    "d",
    " ",
    "B",
    "a",
    "d",
    "r",
    "a",
    "w",
    "y",
  ];
  const jobArray = ["A", "I", " ", "E", "n", "g", "i", "n", "e", "e", "r"];

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 4000)
  // }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={Mohamed} alt="Mohamed Badrawy" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={16}
            />
          </h1>
          <h2>Machine Learning / JavaScript / Engineering</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
        <div>
          <img
            src={Me1}
            alt="Mohamed Badrawy"
            className="me"
            style={{
              float: "right",
              margin: "0 20px 20px 0",
              width: "500px",
              marginTop: "200px",
            }}
          />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Home;
