interface AboutProps {
  paragraphs: string[]
}

function About({ paragraphs }: AboutProps) {
  return (
    <section className="section" aria-labelledby="about-title">
      <h2 id="about-title" className="section__title">자기소개</h2>
      <div className="about">
        {paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </section>
  )
}

export default About
