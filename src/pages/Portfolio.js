import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import valorant from "../imgs/valorant.jpg";
import techTalk from "../imgs/tt.png";
import valorantMobile from "../imgs/valorantMobile.png"
import { Link } from '@mui/material';
import { CardActionArea } from '@mui/material';
import Masonry from "react-masonry-css";
// import Grid from "@mui/material";


const Portfolio = ({ }) => {
  const theme = useTheme();
  const breakpointColumnsObj = {
    default: 1,
    1150: 1,
    500: 0
  };

  const portfolioInfo = [
    {
      img: valorant,
      title: "Valorant Health",
      subtitle: "UX Engineer",
      text: "Valorant Health is a tele-health start-up based in Berkeley, CA. I designed mockups for the web and mobile application with AdobeXD and developed components using React.",
      link: "https://www.valoranthealth.com/"
    },
    {
      img: valorantMobile,
      title: "Valorant Health Mobile",
      subtitle: "UX Designer + App Developer",
      text: "Prototypes for Valorant Health were made using AdobeXD and eventually Figma. Attached are the interactive prototypes I built for Valorant's web application.",
      link: "https://www.figma.com/proto/8N7VvFd7XFRcha7Qd6wLKi/Untitled?node-id=2%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2"
    },
    //   {
    //     img: sacHospitality,
    //     subtitle: "UX Designer + Software Developer",
    //     title: "Sacramento Hospitality Group",
    //     text: "Sacramento Hospitality Group was founded in 2019. Since then, we have created five original nonprofit events that helped fundraise for homelessness, COVID-19 relief and civil rights organizations.We have worked with Loaves and Fishes, Direct Relief Fund, The World Health Organization, United Way, NAACP and more.",
    //     link: "www.sacramentohospitality.com"
    // },
    {
      img: techTalk,
      subtitle: "UX Engineer",
      title: "Tech Talk",
      text: "Tech-Talk is a professional network for women in technology. This is the perfect place for ambitious women to connect and make things happen. Whether you are searching for a job opportunity, looking for a mentor to guide you through this bustling industry, or just have questions about the tech field you're in, Tech-Talk is the community to join.",
      link: "https://tech-talk-wit.herokuapp.com/"
    }
  ]

  return (
    <div style={styles.page}>
      <p style={styles.title}
      >
        My Work
      </p>
      <div
        className="rectangle"
        style={styles.lineBreak}
      />
      <div className="aboutMeContainer">
        <div style={{
          display: "grid",
          columns: "repeat(auto-fit, 20rem)",
          justifyContent: "center"
        }}>
          {/* <div
          className="aboutMeContent"
          style={styles.aboutMeContent}
        > */}
          {portfolioInfo.map((d, i) => (
            <div key={`${d.name}-${i}`}>
              {/* <Card
                sx={styles.card}
              >
                <Link href={d.link} style={styles.link}>

                  <CardMedia>
                    <img
                      src={d.img}
                      alt="Valorant-Health-New-Service-Logo"
                      border="0"
                      height="300"
                      style={styles.cardImg}
                    ></img>
                  </CardMedia>
                </Link>

                <Box
                  style={styles.box}
                >
                  <CardContent>
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
                      sx={styles.box2}
                    >
                      {d.text}
                    </Box>
                  </CardContent>
                </Box>
              </Card> */}

              {/* <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }}
 >

<Grid item xs={3}> */}

              {/* MASONRY */}

               <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
              <Card sx={styles.card}>
                <CardActionArea>
                <Link href={d.link} style={styles.link}>

                  <CardMedia
                    src={d.img}
                    component="img"
                    alt="green iguana"
                  />
                  </Link>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={styles.title} >
                      {d.title}
                    </Typography>
                    <Typography variant="subtitle1"
                      fontSize="20px"
                      fontWeight="600"
                      fontFamily="avenir"
                      color="#407BFF"
                      component="div">
                      {d.subtitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={styles.box2}>
                      {d.text}

                    </Typography>
                  </CardContent>
                  </CardActionArea>
              </Card>
              </Masonry> 

              {/* </Grid>       */}
              {/* //  </Grid> */}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Portfolio;

const styles = {
  page: {
    textAlign: "center"
  },
  title: {
    color: "#000000",
    fontSize: "30px",
    textAlign: "center",
    fontWeight: "500",
    fontFamily: "Avenir",
    letterSpacing: ".2rem",
    marginTop: "10%",
  },
  lineBreak: {
    display: "inline-block",
    width: "80px",
    height: "10px",
    background: "#8CB0FF",
    borderRadius: "20%",
  },
  aboutMeContent: {
    padding: "5%",
    textAlign: "center",
    fontFamily: "avenir",
    alignContent: "center",
    alignItems: "center",
  },
  cardDiv: {
    textAlign: "center"
  },
  card: {
    margin: "5%",
    display: "flex",
    borderRadius: "5%",
    marginRight: "12%",
    marginLeft: "12%",
    alignItems: "center",
    maxWidth: 600,
    // minWidth: 300
  },
  link: {
    textTransform: "none"
  },
  cardImg: {
    borderRadius: "10%",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    margin: "4%",
    textTransform: "none"
  },
  box2: {
    display: "flex",
    alignItems: "center",
    margin: "3%",
    fontSize: "15px",
    fontFamily: "avenir"
  },
  title: {
    fontSize: "28px",
    fontFamily: "avenir",
    fontWeight: "500"
  },
  subtitle: {
    fontSize: "20px",
    fontWeight: "600",
    fontFamily: "avenir",
    color: "#407BFF"
  },




  // container: {
  //   marginTop: 30,
  //   paddingBottom: 30
  // },
  // header: {
  //   padding: 15
  // },
  // title: {
  //   fontSize: 28
  // },
  // titleGreen: {
  //   color: "#179ad9",
  //   fontWeight: "600"
  // },
  // subtitleContainer: {
  //   marginTop: 20
  // },
  // subtitle: {
  //   fontSize: 15,
  //   color: "#4F4F4F"
  // },
  // servicesContainer: {
  //   display: "flex",
  //   flexDirection: "row"
  // }
}
