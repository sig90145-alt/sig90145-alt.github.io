import type { Project } from '../profile'
import './Projects.css'

interface ProjectsProps {
  projects: Project[]
}

function Projects({ projects }: ProjectsProps) {
  return (
    <section className="section" aria-labelledby="projects-title">
      <h2 id="projects-title" className="section__title">프로젝트</h2>
      <ul className="projects">
        {projects.map((p) => (
          <li key={p.title} className="projects__card">
            <h3 className="projects__title">{p.title}</h3>
            <p className="projects__description">{p.description}</p>
            {p.tags.length > 0 && (
              <ul className="tags projects__tags" aria-label={`${p.title} 사용 기술`}>
                {p.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            )}
            {p.link && (
              <a
                className="projects__link"
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                자세히 보기
                <span className="projects__link-arrow" aria-hidden="true">
                  →
                </span>
                <span className="projects__sr-only">(새 탭에서 열림)</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
