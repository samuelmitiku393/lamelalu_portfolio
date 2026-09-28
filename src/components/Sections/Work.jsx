import Section from '../Shared/Section';
import ProjectCard from '../UI/ProjectCard';
import { projects } from '../../data/projects';

export default function Work() {
  return (
    <Section
      id="work"
      index={1}
      title="Selected Work"
      lead={`${projects.length} systems shipped. Expand any project for the problem, the architecture, and the decisions behind it.`}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
