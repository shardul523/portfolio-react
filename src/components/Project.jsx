const Project = ({ projectDetails }) => {
  const { name, projectLink, imageLink } = projectDetails;

  return (
    <a href={projectLink} className="project">
      <img src={imageLink} className="project-image" />
      <div className="project-name">
        <span className="visible-hover brackets">&lt; </span>
        {name}
        <span className="visible-hover brackets"> /&gt;</span>
      </div>
    </a>
  );
};

export default Project;