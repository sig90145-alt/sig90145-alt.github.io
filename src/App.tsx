import { profile } from './profile'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'

function App() {
  return (
    <main className="page">
      <Header name={profile.name} tagline={profile.tagline} />
      <About paragraphs={profile.about} />
      <Skills groups={profile.skills} />
    </main>
  )
}

export default App
