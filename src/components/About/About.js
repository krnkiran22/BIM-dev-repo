import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <p className="home-about-body">
              I am <b className="purple">Vignesh Kumar K</b>, a skilled <b className="purple">BIM Modeler</b> with expertise in <b className="purple">Revit Point Cloud modeling</b>.
              <br />
              <br />I have 1 year of experience at <b className="purple">DBOTICS TECHNOLOGY</b>, working on high-profile projects like <b className="purple">theme parks, high-rise buildings, and resorts</b>.
              <br />
              <br />Previously, I worked as a <b className="purple">Project Engineer</b>, handling <b className="purple">material purchasing, estimation, CAD drafting, project planning, and site supervision</b> for residential and apartment buildings.
              <br />
              <br />My technical skills include <b className="purple">AutoCAD, Revit Architecture, Revit Structure, Revit MEP, Navisworks Manage, and SketchUp</b>.
              <br />
              <br />I am passionate about 3D modeling, project management, and improving efficiency in architectural and civil engineering projects.
            </p>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        
      </Container>
    </Container>
  );
}

export default About;
