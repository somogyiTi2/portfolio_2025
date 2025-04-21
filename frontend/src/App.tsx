import './App.css'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import { ThemeProvider } from './store/ThemeContext'

function App() {


  return (
    <ThemeProvider>
      <Navbar />
      <section id="me">
        <Hero />
      </section>
      <section id="page2">
        <h1>Hello</h1>
      </section>
    </ThemeProvider>
  )
}

export default App
