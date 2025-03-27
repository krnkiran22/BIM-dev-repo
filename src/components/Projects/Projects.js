import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import VGP4 from "../../Assets/Projects/VGP4.png";
import VGP1 from "../../Assets/Projects/VGP6.png";
import VGP2 from "../../Assets/Projects/VGP2.png";
import rajesh2 from "../../Assets/Projects/rajesh2.png";
import rajesh4 from "../../Assets/Projects/rajesh4.png";
import rajesh5 from "../../Assets/Projects/rajesh5.png";
import OASIS2 from "../../Assets/Projects/OASIS2.png";
import OASIS3 from "../../Assets/Projects/OASIS3.png";
import OASIS from "../../Assets/Projects/OASIS.png";
import infinity2 from "../../Assets/Projects/infinity2.png";
import infinity from "../../Assets/Projects/infinity.png";
import infinity4 from "../../Assets/Projects/infinity4.png";
import jeffry4 from "../../Assets/Projects/jeffry4.png";
import jeffry1 from "../../Assets/Projects/jeffry1.png";
import jeffry2 from "../../Assets/Projects/jeffry2.png";
import Aravallilawn1 from "../../Assets/Projects/Aravallilawn1.png";
import Aravallilawn from "../../Assets/Projects/Aravallilawn.png";
import Aravallilawn3 from "../../Assets/Projects/Aravallilawn3.png";
import yercaud3 from "../../Assets/Projects/yercaud3.png";
import yercaud4 from "../../Assets/Projects/yercaud4.png";
import yercaud2 from "../../Assets/Projects/yercaud2.png";

const ProjectGroup = ({ title, description, images }) => {
  return (
    <div className="project-group" style={{ marginBottom: "50px" }}>
      <h2 className="project-subheading" style={{ color: "white", marginBottom: "20px" }}>
        <strong className="purple">{title}</strong>
      </h2>
      
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {images.map((img, index) => (
          <Col md={4} className="project-card" key={index}>
            <ProjectCard
              imgPath={img}
              isBlog={false}
              title=""
              description=""
            />
          </Col>
        ))}
      </Row>
      
      <p style={{ color: "white", textAlign: "center", marginTop: "15px" }}>
        {description}
      </p>
    </div>
  );
};

function Projects() {
  const projectGroups = [
    {
      title: "VGP Project",
      description: "Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation.",
      images: [VGP4, VGP1, VGP2]
    },
    {
      title: "Building Project",
      description: "Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation.",
      images: [rajesh2, rajesh4, rajesh5]
    },
    {
      title: "OASIS Restaurant",
      description: "Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation.",
      images: [OASIS2, OASIS3, OASIS]
    },
    {
      title: "Infinity Pool",
      description: "Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation.",
      images: [infinity2, infinity, infinity4]
    },
    {
      title: "Jeffry Building",
      description: "Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation.",
      images: [jeffry4, jeffry1, jeffry2]
    },
    {
      title: "Aravalli Lawn",
      description: "Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation.",
      images: [Aravallilawn1, Aravallilawn, Aravallilawn3]
    },
    {
      title: "Yercaud Villa",
      description: "Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation.",
      images: [yercaud3, yercaud4, yercaud2]
    }
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white", textAlign: "center", marginBottom: "50px" }}>
          Here are a few projects I've worked on recently. 
        </p>
        
        {projectGroups.map((group, index) => (
          <ProjectGroup
            key={index}
            title={group.title}
            description={group.description}
            images={group.images}
          />
        ))}
      </Container>
    </Container>
  );
}

export default Projects;