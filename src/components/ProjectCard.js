import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description }</span>
          <div className="proj-link">
          {projectLink && (
            <a 
            href={projectLink} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{color: "white", fontSize: "12px"}}>
              View Project
            </a>
          )}
          </div>
        </div>
      </div>
    </Col>
  );
};
