import './App.css'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import StarBackground from './component/StarBackground'
import { ThemeProvider } from './store/ThemeContext'

function App() {


  return (
    <ThemeProvider>
      <Navbar />
      <section id="me">
        <StarBackground>
          <Hero />
        </StarBackground>
      </section>
      <section id="page2">
        <h1>Hello</h1>
      </section>
    </ThemeProvider>
  )
}

export default App
