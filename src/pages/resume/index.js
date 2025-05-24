import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  dataabout,
  meta,
  skills,
  education,
  experiences,
  publications,
  awards,
} from "../../content_option";

export const Resume = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h4 className="display-9 mb-4">About me</h4>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p className="about-text">{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((category, i) => (
              <div key={i} className="skills-grid">
                <h4 className="color_sec py-2">{category.category}</h4>
                <div className="skills-container">
                  {category.skills.map((skill, j) => (
                    <div key={j} className="skill-item">
                      <img
                        src={skill.logo || "/images/placeholder.png"}
                        alt={skill.name ? `${skill.name} logo` : "Skill logo"}
                        onError={(e) => {
                          e.target.src = "/images/placeholder.png";
                        }}
                      />
                      <p>{skill.name || "Unknown"}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="7">
            {education.map((edu, i) => (
              <div key={i} className="education-item">
                <div className="education-header">
                  <p className="university">{edu.university}</p>
                  {edu.logo && (
                    <img
                      src={edu.logo || "/images/placeholder.png"}
                      alt={edu.university ? `${edu.university} logo` : "University logo"}
                      onError={(e) => {
                        e.target.src = "/images/placeholder.png";
                      }}
                    />
                  )}
                </div>
                <p className="major">{edu.major}</p>
                <p className="description">{edu.description}</p>
              </div>
            ))}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Experiences</h3>
          </Col>
          <Col lg="7">
            {experiences.map((exp, i) => (
              <div key={i} className="experience-item">
                <h5>{exp.title}</h5>
                <p className="time">{exp.time}</p>
                <p className="description">{exp.description || "No description available"}</p>
              </div>
            ))}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Publications</h3>
          </Col>
          <Col lg="7">
            {publications.map((pub, i) => (
              <div key={i} className="publication-item">
                <img
                  src={pub.image || "/images/placeholder.png"}
                  alt={pub.title ? `${pub.title} cover` : "Publication cover"}
                  onError={(e) => {
                    e.target.src = "/images/placeholder.png";
                  }}
                />
                <h5>{pub.title}</h5>
                <a
                  href={pub.link}
                  className="text_2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div id="button_h" className="ac_btn btn">
                    {pub.linkName}
                    <div className="ring one"></div>
                    <div className="ring two"></div>
                    <div className="ring three"></div>
                  </div>
                </a>
              </div>
            ))}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Awards</h3>
          </Col>
          <Col lg="7">
            {awards.map((award, i) => (
              <div key={i} className="awards-item">
                <p className="award-title">{award.title}</p>
                <p className="description">{award.description}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};