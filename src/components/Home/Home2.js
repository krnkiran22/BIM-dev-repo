import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am <b className="purple">Vignesh Kumar K</b>, a passionate
              <b className="purple"> BIM Modeler</b> with 1 year of experience in
              <b className="purple"> Revit Point Cloud</b> modeling at DBOTICS TECHNOLOGY.
              <br />
              <br />I specialize in handling complex projects like <b className="purple">theme parks, high-rise buildings, resorts, and more</b>.
              <br />
              <br />
              Previously, I worked as a <b className="purple">Project Engineer</b> for 2 years, where I managed
              <b className="purple"> material purchasing, estimation, CAD drafting, site supervision, and project planning</b>.
              <br />
              <br />
              I have expertise in <b className="purple">AutoCAD, Revit (Architecture, Structure, MEP), Navisworks Manage, and SketchUp</b>.
              <br />
              <br />
              I am always eager to learn and apply my knowledge in <b className="purple">3D modeling and project management</b>,
              ensuring high-quality results in every project I work on.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>Feel free to <span className="purple">connect</span> with me</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/your-github-username"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/your-twitter-handle"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vignesh-kumar-k-531863257"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/your-instagram-handle"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;