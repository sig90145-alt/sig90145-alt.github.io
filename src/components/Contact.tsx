import type { ContactLink } from '../profile'
import { SECTIONS, isExternal } from '../sections'
import './Contact.css'

interface ContactProps {
  message: string
  links: ContactLink[]
}

// 버튼에 보일 주소: 'mailto:' · 'https://' · 끝의 '/' 를 떼어 간단히
const displayUrl = (url: string) =>
  url.replace(/^mailto:/i, '').replace(/^https?:\/\//i, '').replace(/\/$/, '')

function Contact({ message, links }: ContactProps) {
  const { id, title } = SECTIONS.contact
  return (
    <section id={id} className="section contact" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="section__title">
        {title}
      </h2>
      {message && <p className="contact__message">{message}</p>}

      {links.length > 0 && (
        <ul className="contact__list">
          {links.map((link, i) => {
            const external = isExternal(link.url)
            const shown = displayUrl(link.url)
            return (
              <li key={`${link.label}-${link.url}`} className="contact__item">
                <a
                  className={i === 0 ? 'contact__button contact__button--primary' : 'contact__button'}
                  href={link.url}
                  {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  {link.label}
                  {shown && ` · ${shown}`}
                  {external && <span className="visually-hidden"> (새 탭에서 열림)</span>}
                </a>
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}

export default Contact
