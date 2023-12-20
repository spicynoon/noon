import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Level Register Web",
      description: "Computer Organization and Architecture",
      imgUrl: projImg1,
      projectLink: "https://spicynoon.github.io/levelregister.github.io/"
    },
    {
      title: "Babukcoy Adventure",
      description: "Game Development",
      imgUrl: projImg2,
      projectLink: "https://www.youtube.com/watch?v=L06AycI_Ffo&feature=youtu.be"
    },
    {
      title: "Feel the Noon",
      description: "Google Sites",
      imgUrl: projImg3,
      projectLink: "https://sites.google.com/view/spicynoon/home"
    },
    {
      title: "Noonword",
      description: "Crossword Games",
      imgUrl: projImg4,
      projectLink: "https://spicynoon.github.io/noonword/"
    },
    {
      title: "Travnoon",
      description: "Travelling Website",
      imgUrl: projImg5,
      projectLink: "https://spicynoon.github.io/travnoon/"
    },
    {
      title: "Lachochant App",
      description: "Task Manager Mobile App",
      imgUrl: projImg6,
      projectLink: "https://github.com/spicynoon/lachochant_app/blob/main/5.jpg"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Soon</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Soon</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
