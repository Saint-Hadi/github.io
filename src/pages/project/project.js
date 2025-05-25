import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import githubLogo from "../../assets/images/github.svg";
import mediumLogo from "../../assets/images/medium.svg";
import { projects } from "../../content_option";
import "./style.css";

export const Project = () => {
  return (
    <Container>
      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <div className="project-section">
            {/* Project Header */}
            <div className="project-header">
              <Row className="justify-content-center">
                <Col lg="8" className="text-center">
                  <h1 className="project-title">{project.title}</h1>
                  <hr className="t_border my-4 mx-auto" />
                </Col>
              </Row>
            </div>

            {/* Project Content */}
            <Row className="sec_sp">
              <Col>
                <div className="project-embed">
                  <a
                    href={project.mediumLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-embed-link"
                  >
                    <img
                      src={project.image}
                      alt="Medium Article Preview"
                      className="medium-iframe"
                    />
                  </a>
                </div>
                <h3 className="project-summary-title">Summary</h3>
                <p className="project-summary">{project.description}</p>
                <div className="project-links">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <img src={githubLogo} alt="GitHub" className="project-logo" />
                  </a>
                  <a
                    href={project.mediumLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <img src={mediumLogo} alt="Medium" className="project-logo" />
                  </a>
                </div>
              </Col>
            </Row>
          </div>

          {/* White border line after each project except last */}
          {index < projects.length - 1 && (
            <hr className="project-divider" />
          )}
        </React.Fragment>
      ))}
    </Container>
  );
};
