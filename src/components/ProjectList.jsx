export default function ProjectList({ projects }) {
  return (
    <div className="content">
      <div className="content__cards">
        {projects.map((project, index) => (
          <img key={index} src={project.img} alt="" />
        ))}
      </div>
    </div>
  );
}
