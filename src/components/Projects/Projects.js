import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import VGP4 from "../../Assets/Projects/VGP4.png";
import VGP6 from "../../Assets/Projects/VGP6.png";
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
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card" >
            <ProjectCard
              imgPath={VGP6}
              isBlog={false}
              title="VGP Model"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VGP2}
              isBlog={false}
              title="VGP Model"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rajesh2}
              isBlog={false}
              title="Building Pointcloud "
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rajesh4}
              isBlog={false}
              title="Building Model"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rajesh5}
              isBlog={false}
              title="Building Model"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/"       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OASIS2}
              isBlog={false}
              title="OASIS-Restaurant Pointcloud"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/"       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OASIS3}
              isBlog={false}
              title="OASIS-Restaurant Pointcloud"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/"       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OASIS}
              isBlog={false}
              title="OASIS-Restaurant Model"    
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."


              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={infinity2}
              isBlog={false}
              title="Inifity Pool Pointcloud"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={infinity}
              isBlog={false}
              title="Inifity Pool Floorplan"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={infinity4}
              isBlog={false}
              title="Inifity Pool Model"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jeffry4}
              isBlog={false}
              title="Building Pointcloud"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jeffry1}
              isBlog={false}
              title="Building Model"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/"       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jeffry2}
              isBlog={false}
              title="Building Model"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Aravallilawn1}
              isBlog={false}
              title="Ararvalli Lawn Pointcloud"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Aravallilawn}
              isBlog={false}
              title="Ararvalli Lawn Floorplan"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Aravallilawn3}
              isBlog={false}
              title="Ararvalli Lawn Model"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/"     
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yercaud3}
              isBlog={false}
              title="Yercaud Villa Pointcloud"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yercaud4}
              isBlog={false}
              title="Yercaud Villa Pointcloud"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yercaud2}
              isBlog={false}
              title="Yercaud Villa Model"
              description="Processed point cloud data to generate accurate floor plans and 3D BIM models, ensuring precise as-built documentation."

              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/"       
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
