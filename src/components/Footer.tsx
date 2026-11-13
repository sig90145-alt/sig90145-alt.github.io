import './Footer.css'

interface FooterProps {
  name: string
}

// 렌더링마다 계산하지 않도록 모듈 로드 시 한 번만
const YEAR = new Date().getFullYear()

function Footer({ name }: FooterProps) {
  const year = YEAR
  return (
    <footer className="footer">
      <p>
        © {year} {name}
      </p>
      <a className="footer__top" href="#top">
        맨 위로
      </a>
    </footer>
  )
}

export default Footer
