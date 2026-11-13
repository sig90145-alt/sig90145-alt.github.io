import type { Project } from '../profile'
import { SECTIONS, isExternal } from '../sections'
import './Projects.css'

interface ProjectsProps {
  projects: Project[]
}

function Projects({ projects }: ProjectsProps) {
  const { id, title } = SECTIONS.projects
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="section__title">
        {title}
      </h2>
      <ul className="projects">
        {projects.map((p) => {
          const external = p.link ? isExternal(p.link) : false
          return (
            <li key={p.title} className="projects__item">
              <h3 className="projects__title">{p.title}</h3>
              <p className="projects__description">{p.description}</p>
              {p.tags.length > 0 && (
                <ul className="projects__tags" aria-label={`${p.title} 사용 기술`}>
                  {p.tags.map((tag) => (
                    <li key={tag} className="projects__tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
              {p.link && (
                <a
                  className="projects__link"
                  href={p.link}
                  {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  자세히 보기
                  <span className="visually-hidden"> ({p.title})</span>
                  <span aria-hidden="true"> →</span>
                  {external && <span className="visually-hidden"> (새 탭에서 열림)</span>}
                </a>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Projects
