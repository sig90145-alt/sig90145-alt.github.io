import { SECTIONS } from '../sections'
import './About.css'

interface AboutProps {
  paragraphs: string[]
  quote: string
}

function About({ paragraphs, quote }: AboutProps) {
  const { id, title } = SECTIONS.about
  return (
    <section id={id} className="section about" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="section__title">
        {title}
      </h2>
      {paragraphs.map((text, i) => (
        <p key={i} className="about__text">
          {text}
        </p>
      ))}
      {quote && <blockquote className="about__quote">“{quote}”</blockquote>}
    </section>
  )
}

export default About
