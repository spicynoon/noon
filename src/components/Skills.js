import flutter from "../assets/img/flutter.svg";
import py from "../assets/img/python.svg";
import java from "../assets/img/java.svg";
import cpp from "../assets/img/cpp.svg";
import kotlin from "../assets/img/kotlin.svg";
import mongo from "../assets/img/mongodb.svg";
import firebase from "../assets/img/firebase.svg";
import docker from "../assets/img/docker.svg";
import vue from "../assets/img/vuejs.svg";
import node from "../assets/img/nodejs.svg";
import next from "../assets/img/nextjs.svg";
import react from "../assets/img/reactjs.svg";
import js from "../assets/img/js.svg";
import bs from "../assets/img/bootstrap.svg";
import css from "../assets/img/css.svg";
import html from "../assets/img/html.svg";
import google from "../assets/img/google.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={flutter} alt="Image" />
                  <h5>Flutter</h5>
                </div>
                <div className="item">
                  <img src={google} alt="Image" />
                  <h5>Google Workspace</h5>
                </div>
                <div className="item">
                  <img src={py} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={java} alt="Image" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={cpp} alt="Image" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={kotlin} alt="Image" />
                  <h5>Kotlin</h5>
                </div>
                <div className="item">
                  <img src={mongo} alt="Image" />
                  <h5>Mongo Database</h5>
                </div>
                <div className="item">
                  <img src={firebase} alt="Image" />
                  <h5>Firebase</h5>
                </div>
                <div className="item">
                  <img src={docker} alt="Image" />
                  <h5>Docker</h5>
                </div>
                <div className="item">
                  <img src={vue} alt="Image" />
                  <h5>Vue JS</h5>
                </div>
                <div className="item">
                  <img src={node} alt="Image" />
                  <h5>Node JS</h5>
                </div>
                <div className="item">
                  <img src={next} alt="Image" />
                  <h5>Next JS</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={js} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={bs} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>HTML</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
