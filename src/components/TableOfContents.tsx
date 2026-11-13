import { SECTION_ORDER } from '../sections'
import './TableOfContents.css'

function TableOfContents() {
  return (
    <nav className="toc" aria-labelledby="toc-title">
      <h2 id="toc-title" className="toc__title">
        목차
      </h2>
      <ol className="toc__list">
        {SECTION_ORDER.map((section) => (
          <li key={section.id}>
            <a className="toc__link" href={`#${section.id}`}>
              <span className="toc__numeral" aria-hidden="true">
                {section.numeral}
              </span>
              {section.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default TableOfContents
