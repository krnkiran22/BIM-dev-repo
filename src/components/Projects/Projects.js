import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import VGP4 from "../../Assets/Projects/VGP4.png";
import VGP1 from "../../Assets/Projects/VGP1.png";
import VGP2 from "../../Assets/Projects/VGP2.png";
import rajesh2 from "../../Assets/Projects/rajesh.png";
import rajesh4 from "../../Assets/Projects/rajesh2.png";
import rajesh5 from "../../Assets/Projects/rajesh3.png";
import OASIS2 from "../../Assets/Projects/OASIS1.png";
import OASIS3 from "../../Assets/Projects/OASIS3.png";
import OASIS from "../../Assets/Projects/OASIS.png";
import infinity2 from "../../Assets/Projects/infinity2.png";
import infinity from "../../Assets/Projects/infinity.png";
import infinity4 from "../../Assets/Projects/infinity4.png";
import jeffry4 from "../../Assets/Projects/jeffry4.png";
import jeffry1 from "../../Assets/Projects/jeffry3.png";
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
      title: "Theme Park",
      description: "It is a theme park project located in Chennai , India. The total area of the project is 20,150 sqft. The project was completed in 4 days using Revit Architecture to create 3D models and floor plans for the theme park.",
      images: [VGP4, VGP1, VGP2]
    },
    {
      title: "Bunglow",
      description: "It is a bungalow project located in Chennai , India. The total area of the project is 22,560 sqft. The project was completed in 10 days using Revit Architecture to create 3D models and floor plans for the building.",
      images: [rajesh2, rajesh4, rajesh5]
    },
    {
      title: "Restaurant",
      description: "It is a restaurant project located in Udaipur , India. The total area of the project is 7,700 sqft. The project was completed in 4 days using an environment Revit plugin to create the landscape design. Pathways, stairs, and other elements were modeled in Revit and exported to SketchUp, where the plantation work was finalized.",
      images: [OASIS2, OASIS3, OASIS]
    },
    {
      title: "Infinity Pool + Lawn",
      description: "It is a lawn and pool project located in Udaipur , India. The total area of the project is 26,300 sqft. The project was completed in 4 days using an environment Revit plugin to create the landscape design. Pathways, stairs, and other elements were designed in Revit and exported to SketchUp, where the plantation work was finalized.",
      images: [infinity2, infinity, infinity4]
    },
    {
      title: "Building",
      description: "It is a residential project located in Chennai , India. The total area of the project is 7,235 sqft. The project was completed in 5 days using Revit Architecture to create 3D models and floor plans for the building.",
      images: [jeffry4, jeffry1, jeffry2]
    },
    {
      title: "Lawn",
      description: "It is a lawn project located in Udaipur , India. The total area of the project is 32,100 sqft. The project was completed in 2 days using an environment Revit plugin to create the landscape design. Pathways, stairs, and other elements were done in Revit and exported to SketchUp, where the plantation work for the project was completed.",
      images: [Aravallilawn1, Aravallilawn, Aravallilawn3]
    },
    {
      title: "Villa",
      description: "It is a villa project located in Yercaud , India. The total area of the project is 3,590 sqft. The project was completed in 5 days using Revit Architecture to create 3D models and floor plans for the building.",
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