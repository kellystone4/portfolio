import { textAlign } from "@mui/system";
import React, { Component } from "react";
import Kelly from "../imgs/KellyImg.png";
import Button from "@mui/material/Button";
import Skills from "../components/skills";
import { Typography } from "@mui/material";
import homeImg from "../imgs/homeImage.png";
import adobeIcon from "../imgs/adobe.png";
import js from "../imgs/js.jpg";
import github from "../imgs/github.png";
import { Link } from "@mui/material";
import react from "../imgs/react.png";
import figma from "../imgs/figma.webp";
import html from "../imgs/html.png";
import atlassian from "../imgs/atlassian.png";
import { ResponsiveMasonry } from "react-responsive-masonry";
import Masonry from "react-masonry-css";
import Portfolio from "./Portfolio"

// import { Image } from "@mui/icons-material";

export default class About extends Component {
  render() {

    const designInfo = [
      {
        img: react,
        text: "React",
      },
      {
        img: figma,
        text: "Figma",
      },
      {
        img: github,
        text: "Github",
      },
      {
        img: adobeIcon,
        text: "AdobeXD",
      },
      {
        img: js,
        text: "Javascript",
      },
      {
        img: html,
        text: "HTML",
      },
    ];
    
    return (
      <div>
        <div
          className="mainContent"
          style={{
            alignSelf: "center",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <p
            style={{
              color: "#000000",
              fontSize: "40px",
              textAlign: "center",
              fontWeight: "400",
              fontFamily: "Avenir",
              letterSpacing: ".1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              maxWidth: 600,
            }}
          >
            Passionate about the intersection between design and development

<Typography align="center">
<a href="https://docs.google.com/document/d/1yG-KM8P53XoFjifVBGUsLYk9Td4qrmLo2lMX8AK0R5s/edit#heading=h.gdydvfgitvot"  style={{
                  textDecoration: 'none',
                  textTransform: "none",

                }}>
              <Button
                style={{
                  marginTop: "10%",
                  backgroundColor: "#407BFF",
                  textTransform: "none",
                  borderRadius: "15%",
                  padding: "3%",
                  color: "white",
                  // margin: "10%",
                  fontSize: "22px",
                  textAlign: "center",
                  fontWeight: "500",
                  fontFamily: "Avenir",
                  letterSpacing: ".2rem",
                  textDecoration: 'none',
                  textTransform: "none",

                }}
              >
                My Resume
              </Button>
              </a>
            </Typography>
          </p>
          <img
            src={homeImg}
            alt="home-Image"
            border="0"
            height="600px"
            style={{
              display: "flex",
              flexGrow: 1,
              minWidth: 600,
              maxWidth: 600,
            }}
          ></img>
        </div>

        <div
          className="aboutMeContent"
          style={{ padding: "5%", textAlign: "center" }}
        >
          <p
            style={{
              color: "#000000",
              fontSize: "30px",
              textAlign: "center",
              fontWeight: "500",
              fontFamily: "Avenir",
              letterSpacing: ".2rem",
            }}
          >
            About Me
          </p>
          <div
            className="rectangle"
            style={{
              display: "inline-block",
              width: "80px",
              height: "10px",
              background: "#8CB0FF",
              borderRadius: "20%",
              marginBottom: "2%",
            }}
          />
          <div className="aboutMeImg">
            {/* <Kelly></Kelly> */}
            <img
              src="https://i.ibb.co/qFsWFYn/kelly.png"
              alt="KellyImg"
              height="250"
              style={{
                borderRadius: "50%",
                boxShadow: "1px 6px 1px #E6E6E6",
              }}
            ></img>
          </div>
          <p
            style={{
              color: "#000000",
              fontSize: "23px",
              textAlign: "center",
              fontWeight: "400",
              fontFamily: "Avenir",
              letterSpacing: ".1rem",
              marginLeft: "10%",
              marginRight: "10%",
              margin: "5%",
            }}
          >
            Hi, I’m Kelly! I am a UX engineer and a recent software development
            graduate. I have an educational background in software development
            and am self-taught in UX design. My career interests are in software
            engineering, ux design, and product management. I am currently based
            in Los Angeles, CA.
          </p>
          <p
            style={{
              color: "#000000",
              fontSize: "23px",
              textAlign: "center",
              fontWeight: "400",
              fontFamily: "Avenir",
              letterSpacing: ".1rem",
              marginLeft: "10%",
              marginRight: "10%",
              margin: "5%",
            }}
          >
            <b>Education:</b>
            <br></br>B.S. Management, San Francisco State University
            <br></br>
            M.S. Software Development, Boston University
            <br></br>
            Certificate Full-Stack Development, UC Berkeley
          </p>
        </div>

        <div className="skillsContainer">
          <p
            style={{
              fontSize: "25px",
              textAlign: "center",
              fontWeight: "500",
              fontFamily: "Avenir",
              letterSpacing: ".1rem",
              marginTop: "-2%",
            }}
          >
            Relevant Skills
          </p>
          <p
            style={{
              fontSize: "20px",
              textAlign: "center",
              fontWeight: "500",
              fontFamily: "Avenir",
              letterSpacing: ".1rem",
              margin: "5%",
            }}
          >
            <Masonry
              breakpointCols={3}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {designInfo.map((d, i) => (
                <div key={`${d.name}-${i}`}>
                  <p>{d.text}</p>
                  <img
                    style={{ height: "70px" }}
                    src={d.img}
                    className="iconImg"
                    alt={d.name}
                  />
                  <p style={styles.description}>{d.job}</p>
                </div>
              ))}
            </Masonry>
          </p>
        </div>
      </div>
    );
  }
}
const styles = {
  mainContentContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: 1200,
  },
  mainContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 600,
    marginTop: 40,
  },
  imageContainer: {
    display: "flex",
    flexGrow: 1,
    minWidth: 300,
    maxWidth: 500,
  },
  logoContainer: {
    display: "flex",
    flexGrow: 1,
    height: 85,
  },
  logoHipaaContainer: {
    display: "flex",
    flexGrow: 1,
    width: 35,
    marginLeft: 10,
    marginRight: 10,
  },
  mainContentImg: {
    width: "150%",
    height: "150%",
    objectFit: "contain",
  },
  titleGreen: {
    color: "#179ad9",
    fontWeight: "600",
  },
  subtitleContainer: {
    margin: 10,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 18,
    color: "#4F4F4F",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    display: "flex",
    marginTop: 10,
  },
  mainHeader: {
    fontSize: 16,
  },
  buttonText: {
    fontSize: 15,
  },
};
