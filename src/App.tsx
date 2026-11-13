import { profile } from './profile'
import ThemeToggle from './components/ThemeToggle'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <main className="page">
      <ThemeToggle />
      <Header name={profile.name} tagline={profile.tagline} />
      <About paragraphs={profile.about} />
      <Skills groups={profile.skills} />
      <Projects projects={profile.projects} />
      <Contact links={profile.links} />
    </main>
  )
}

export default App
