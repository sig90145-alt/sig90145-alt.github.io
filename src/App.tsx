import { profile } from './profile'
import Header from './components/Header'
import Hero from './components/Hero'
import TableOfContents from './components/TableOfContents'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="page" id="top">
      <Header subtitle={profile.subtitle} />
      <Hero name={profile.name} tagline={profile.tagline} facts={profile.facts} />

      <div className="layout">
        <TableOfContents />
        <main className="layout__main">
          <About paragraphs={profile.about} quote={profile.quote} />
          <Skills groups={profile.skills} />
          <Projects projects={profile.projects} />
          <Timeline items={profile.timeline} />
          <Contact message={profile.contactMessage} links={profile.links} />
        </main>
      </div>

      <Footer name={profile.name} />
    </div>
  )
}

export default App
