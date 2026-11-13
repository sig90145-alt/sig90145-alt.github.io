import type { SkillGroup } from '../profile'
import { SECTIONS } from '../sections'
import './Skills.css'

interface SkillsProps {
  groups: SkillGroup[]
}

function Skills({ groups }: SkillsProps) {
  const { id, title } = SECTIONS.stack
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="section__title">
        {title}
      </h2>
      <dl className="skills">
        {groups.map((group) => (
          <div key={group.category} className="skills__row">
            <dt className="skills__category">{group.category}</dt>
            <dd className="skills__items">{group.items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default Skills
