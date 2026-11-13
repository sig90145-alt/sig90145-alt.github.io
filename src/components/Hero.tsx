import type { HeroFacts } from '../profile'
import './Hero.css'

interface HeroProps {
  name: string
  tagline: string
  facts: HeroFacts
}

function Hero({ name, tagline, facts }: HeroProps) {
  // 라벨은 고정, 값은 profile.ts 에서
  const items = [
    { label: '희망 직무', value: facts.role },
    { label: '근무 가능 지역', value: facts.location },
    { label: '입사 가능 시기', value: facts.availability },
  ]

  return (
    <section className="hero" aria-labelledby="hero-name">
      <p className="hero__label">
        <span aria-hidden="true">자 기 소 개</span>
        <span className="visually-hidden">자기소개</span>
      </p>
      <h1 id="hero-name" className="hero__name">
        {name}
      </h1>
      <p className="hero__tagline">{tagline}</p>
      <p className="hero__facts">
        {items.map((item, i) => (
          <span key={item.label} className="hero__fact-group">
            {i > 0 && (
              <span className="hero__sep" aria-hidden="true">
                /
              </span>
            )}
            <span>
              <span className="visually-hidden">{item.label}: </span>
              {item.value}
            </span>
          </span>
        ))}
      </p>
    </section>
  )
}

export default Hero
