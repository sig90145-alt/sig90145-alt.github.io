import { useEffect, useState } from 'react'
import './ThemeToggle.css'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

function isTheme(value: unknown): value is Theme {
  return value === 'light' || value === 'dark'
}

// 초기값: localStorage('theme') → 없으면 prefers-color-scheme
function getInitialTheme(): Theme {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (isTheme(stored)) return stored
  } catch {
    // 저장소 접근 불가(사생활 보호 모드 등) → 시스템 설정으로
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const isDark = theme === 'dark'

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // 저장 실패는 무시 (현재 화면에는 이미 적용됨)
    }
  }, [theme])

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="다크 모드"
      aria-pressed={isDark}
      title={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {isDark ? '☀' : '☾'}
      </span>
    </button>
  )
}

export default ThemeToggle
