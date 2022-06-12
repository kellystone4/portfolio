import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import valorant from "../imgs/valorant.jpg";
import sacHospitality from "../imgs/sacHospitality.jpg";
import techTalk from "../imgs/tt.png";
import { Link } from '@mui/material';

const Portfolio = ({}) => {
  const theme = useTheme();

  const portfolioInfo = [
      {
          img: valorant,
          title: "Valorant Health",
          subtitle: "UX Engineer",
          text: "Valorant Health is a tele-health start-up based in Berkeley, CA. I designed mockups for the web and mobile application with AdobeXD and developed components using React.",
          link: "www.valoranthealth.com"
      },
      {
        img: sacHospitality,
        subtitle: "UX Designer + Software Developer",
        title: "Sacramento Hospitality Group",
        text: "Sacramento Hospitality Group was founded in 2019. Since then, we have created five original nonprofit events that helped fundraise for homelessness, COVID-19 relief and civil rights organizations.We have worked with Loaves and Fishes, Direct Relief Fund, The World Health Organization, United Way, NAACP and more.",
        link: "www.sacramento.com"
    },
    {
        img: techTalk,
        subtitle: "UX Engineer",
        title: "Tech Talk",
        text: "Tech-Talk is a professional network for women in technology. This is the perfect place for ambitious women to connect and make things happen. Whether you are searching for a job opportunity, looking for a mentor to guide you through this bustling industry, or just have questions about the tech field you're in, Tech-Talk is the community to join.",
        link: "https://tech-talk-wit.herokuapp.com/"
    }
    ]

  return (
    <div style={{ textAlign: "center" }}>
      <p
        style={{
          color: "#000000",
          fontSize: "30px",
          textAlign: "center",
          fontWeight: "500",
          fontFamily: "Avenir",
          letterSpacing: ".2rem",
          marginTop: "10%",
        }}
      >
        My Work
      </p>
      <div
        className="rectangle"
        style={{
          display: "inline-block",
          width: "80px",
          height: "10px",
          background: "#8CB0FF",
          borderRadius: "20%",
        //   marginBottom: "2%",
        }}
      />
      <div className="aboutMeContainer">
      <div
          className="aboutMeContent"
          style={{
            padding: "5%",
            textAlign: "center",
            fontFamily: "avenir",
            alignContent: "center",
            alignItems: "center",
          }}
        >
      {portfolioInfo.map((d, i) => (
        <div key={`${d.name}-${i}`} style={{textAlign: "center"}}>
        <Card
            sx={{
                margin: "5%",
              display: "flex",
              borderRadius: "5%",
            //   maxWidth: 800,
            marginRight: "12%",
            marginLeft: "12%",
              alignItems: "center",
            }}
          >
                  <Link href={d.link} style={{textTransform: "none"}}>

                      <CardMedia>
              <img
                src={d.img}
                alt="Valorant-Health-New-Service-Logo"
                border="0"
                height="300"
                style={{
                  borderRadius: "10%",
                  boxShadow: "1px 6px 1px #E6E6E6",
                }}
              ></img>
            </CardMedia>
                      </Link>

            <Box
              sx={{ display: "flex", flexDirection: "column", margin: "4%" }}
            >
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  component="div"
                  fontSize="28px"
                  fontFamily="avenir"
                  fontWeight="500"
                >
                  {d.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontSize="20px"
                  fontWeight="600"
                  fontFamily="avenir"
                  color="#407BFF"
                  component="div"
                >
                  {d.subtitle}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    margin: "3%",
                    fontSize: "17px",
                  }}
                >
                  {d.text}
                </Box>
              </CardContent>
            </Box>
          </Card>
        </div>
      ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

const styles = {};
