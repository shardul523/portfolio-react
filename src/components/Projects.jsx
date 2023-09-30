import Project from "./Project";

const projects = [
  {
    name: "ChatRooms",
    projectLink: "https://chatrooms-web.web.app/",
    imageLink: "/images/ChatRooms.jpg",
  },
  {
    name: "TV-Wiz",
    projectLink: "https://shardul523.github.io/TV-Wiz/",
    imageLink: "/images/Tv-Wiz.jpg",
  },
  {
    name: 'Tic Tac Toe',
    projectLink: "http://tictactoeweb.surge.sh/",
    imageLink: "/images/TIC-TAC-TOE.jpg"
  }
];

const Projects = () => (
  <section className="section projects">
    <h2 className="section-heading">Here are some of my projects</h2>
    <div className="projects-list">
      {projects.map((project) => (
        <Project projectDetails={project} key={project.name} />
      ))}
    </div>
  </section>
);

export default Projects;
