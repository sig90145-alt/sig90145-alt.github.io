import type { SkillGroup } from '../profile'

interface SkillsProps {
  groups: SkillGroup[]
}

function Skills({ groups }: SkillsProps) {
  return (
    <section className="section" aria-labelledby="skills-title">
      <h2 id="skills-title" className="section__title">기술 스택</h2>
      <dl className="skills">
        {groups.map((group) => (
          <div key={group.category} className="skills__group">
            <dt className="skills__category">{group.category}</dt>
            <dd className="skills__items">
              <ul className="tags">
                {group.items.map((item) => (
                  <li key={item} className="tag">{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default Skills
