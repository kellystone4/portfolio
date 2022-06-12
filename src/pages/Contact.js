import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Link } from "@mui/material";
import ResponsiveAppBar from "../components/header";
import { LinkedIn, Mail, GitHub } from "@mui/icons-material";
import linkedin from "../imgs/linkedin.png";
import mail from "../imgs/mail.jpg";
import github from "../imgs/github.png";
import Masonry from "react-masonry-css";
import ReactDOM from "react-dom";
import Modal from "react-modal";

// import { BrowserRouter } from "react-router-dom";

export default class Contact extends Component {
  render() {
    const contactInfo = [
      {
        img: linkedin,
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/kelly-a-stone/"
      },
      {
        img: mail,
        title: "Email",
        link: "mailto: kellystone916@gmail.com"
      },
      {
        img: github,
        title: "GitHub",
        link: "https://github.com/kellystone4/"
      },
    ];
    return (
      <div
        style={{
          textAlign: "center",
        //   backgroundColor: "#8CB0FF",
          padding: "2%",
          borderRadius: "5%",
          alignSelf: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div style={{ textAlign: "center", backgroundColor: "#8CB0FF" }}>
          {/* <div
            className="rectangle"
            style={{
              display: "inline-block",
              width: "80px",
              height: "10px",
              background: "#8CB0FF",
              borderRadius: "20%",
              marginBottom: "2%",
            }}
          /> */}
        </div>
        <div className="contactContainer">
          <div
            className="contactContainer"
            style={{
              margin: "5%",
              backgroundColor: "white",
              borderRadius: "5%",
            }}
          >
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
                  marginTop: "5%",
                }}
              >
                Contact Me
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
              <p
                style={{
                  fontFamily: "avenir",
                  textAlign: "center",
                  fontSize: "22px",
                }}
              >
                Questions or Inquires? Feel free to reach out!
              </p>
              <div
                style={{
                  fontFamily: "avenir",
                  textAlign: "center",
                  fontSize: "22px",
                  fontWeight: 500,
                  alignSelf: "center",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Masonry
                  breakpointCols={3}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {contactInfo.map((d, i) => (
                    <div key={`${d.name}-${i}`} style={{ textAlign: "center" }}>
                      <p>{d.title}</p>
                      <Link href={d.link}>
                      <img
                        style={{ height: "70px", margin: 10 }}
                        src={d.img}
                        className="iconImg"
                      />
                      </Link>
                      <p>{d.text}</p>
                    </div>
                  ))}
                </Masonry>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
