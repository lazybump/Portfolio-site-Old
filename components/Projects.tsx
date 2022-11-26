import projects from "../public/data/projects.json";
import ProjectItem from "./ProjectItem";

const Projects: React.FC = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-primary-color">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectItem key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
