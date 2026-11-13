import type { ContactLink } from '../profile'
import './Contact.css'

interface ContactProps {
  links: ContactLink[]
}

// http(s) 링크만 새 탭으로 연다. mailto 등은 같은 탭.
const isExternal = (url: string) => /^https?:\/\//i.test(url)

function Contact({ links }: ContactProps) {
  return (
    <footer className="contact" aria-labelledby="contact-title">
      <h2 id="contact-title" className="contact__title">
        연락처
      </h2>
      <p className="contact__lead">함께 이야기 나눠요</p>

      {links.length > 0 && (
        <ul className="contact__list">
          {links.map((link) => {
            const external = isExternal(link.url)
            return (
              <li key={`${link.label}-${link.url}`} className="contact__item">
                <a
                  className="contact__link"
                  href={link.url}
                  {...(external && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                >
                  {link.label}
                  {external && <span className="contact__sr-only"> (새 탭에서 열림)</span>}
                </a>
              </li>
            )
          })}
        </ul>
      )}
    </footer>
  )
}

export default Contact
