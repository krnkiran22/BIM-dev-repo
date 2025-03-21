import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import VGP4 from "../../Assets/Projects/VGP4.png";
import VGP1 from "../../Assets/Projects/VGP1.png";
import VGP2 from "../../Assets/Projects/VGP2.png";
import rajesh2 from "../../Assets/Projects/rajesh2.png";
import rajesh from "../../Assets/Projects/rajesh.png";
import rajesh3 from "../../Assets/Projects/rajesh3.png";
import OASIS1 from "../../Assets/Projects/OASIS1.png";
import OASIS3 from "../../Assets/Projects/OASIS3.png";
import OASIS from "../../Assets/Projects/OASIS.png";
import infinity2 from "../../Assets/Projects/infinity2.png";
import infinity from "../../Assets/Projects/infinity.png";
import infinity4 from "../../Assets/Projects/infinity4.png";
import jeffry4 from "../../Assets/Projects/jeffry4.png";
import jeffry3 from "../../Assets/Projects/jeffry3.png";
import jeffry2 from "../../Assets/Projects/jeffry2.png";
import Aravallilawn1 from "../../Assets/Projects/Aravallilawn1.png";
import Aravallilawn from "../../Assets/Projects/Aravallilawn.png";
import Aravallilawn3 from "../../Assets/Projects/Aravallilawn3.png";
import yercaud3 from "../../Assets/Projects/yercaud3.png";
import yercaud4 from "../../Assets/Projects/yercaud4.png";
import yercaud2 from "../../Assets/Projects/yercaud2.png";






function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently. 
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VGP4}
              isBlog={false}
              
              title="VGP Pointcloud"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."
         
            />
          </Col>

          <Col md={4} className="project-card" >
            <ProjectCard
              imgPath={VGP1}
              isBlog={false}
              title="VGP Revit Model"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VGP2}
              isBlog={false}
              title="VGP Revit Model"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rajesh}
              isBlog={false}
              title="Rajesh Building Pointcloud "
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rajesh2}
              isBlog={false}
              title="Rajesh Building Floorplan"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."
       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rajesh3}
              isBlog={false}
              title="Rajesh Building Revit Model"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

                  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OASIS3}
              isBlog={false}
              title="OASIS-Restaurant Pointcloud"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."
      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OASIS1}
              isBlog={false}
              title="OASIS-Restaurant Revit Model"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

                     
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OASIS}
              isBlog={false}
              title="OASIS-Restaurant Revit Model"    
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."


                  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={infinity2}
              isBlog={false}
              title="Inifity Pool Pointcloud"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={infinity}
              isBlog={false}
              title="Inifity Pool Revit Model"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

                    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={infinity4}
              isBlog={false}
              title="Inifity Pool Sketchup Model"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

                 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jeffry3}
              isBlog={false}
              title="Jeffry Building Pointcloud"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

                   
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jeffry4}
              isBlog={false}
              title="Jeffry Building Floorplan "
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

                   
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jeffry2}
              isBlog={false}
              title="Jeffry Building Revit Model"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Aravallilawn1}
              isBlog={false}
              title="Ararvalli Lawn Pointcloud"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

               
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Aravallilawn}
              isBlog={false}
              title="Ararvalli Lawn Revit Model"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

                    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Aravallilawn3}
              isBlog={false}
              title="Ararvalli Lawn Sketchup Model"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

                 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yercaud4}
              isBlog={false}
              title="Yercaud Villa Pointcloud"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

                   
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yercaud3}
              isBlog={false}
              title="Yercaud Villa Floorplan"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

                  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yercaud2}
              isBlog={false}
              title="Yercaud Villa Revit Model"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

                   
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
