import './App.css'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import StarBackground from './component/StarBackground'
import { ThemeProvider } from './store/ThemeContext'
import Timeline from './component/Timeline'
import Portfolio from './component/Portfolio'
import Connection from './component/Connection'


function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <section id="me">
        <StarBackground>
          <Hero />
        </StarBackground>
      </section>
      <section id="timeline">
        <Timeline />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="connection">
        <Connection />
      </section>
    </ThemeProvider>
  )
}

export default App
