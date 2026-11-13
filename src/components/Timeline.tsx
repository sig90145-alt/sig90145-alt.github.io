import type { TimelineItem } from '../profile'
import { SECTIONS } from '../sections'
import './Timeline.css'

interface TimelineProps {
  items: TimelineItem[]
}

function Timeline({ items }: TimelineProps) {
  const { id, title } = SECTIONS.timeline
  return (
    <section id={id} className="section timeline" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="section__title">
        {title}
      </h2>
      <ol className="timeline__list">
        {items.map((item, i) => (
          <li
            key={`${item.period}-${item.title}-${i}`}
            className={i === 0 ? 'timeline__item timeline__item--current' : 'timeline__item'}
          >
            <span className="timeline__dot" aria-hidden="true" />
            <p className="timeline__period">{item.period}</p>
            <h3 className="timeline__title">{item.title}</h3>
            <p className="timeline__description">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Timeline
