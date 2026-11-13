import { SECTIONS } from '../sections'
import ThemeToggle from './ThemeToggle'
import './Header.css'

interface HeaderProps {
  subtitle: string
}

// 상단 바: PORTFOLIO / 부제 / 연락처 링크 + 다크 모드 버튼
function Header({ subtitle }: HeaderProps) {
  return (
    <header className="topbar">
      <div className="topbar__brand">PORTFOLIO</div>
      <div className="topbar__subtitle">{subtitle}</div>
      <div className="topbar__actions">
        <a className="topbar__link" href={`#${SECTIONS.contact.id}`}>
          {SECTIONS.contact.title}
        </a>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
