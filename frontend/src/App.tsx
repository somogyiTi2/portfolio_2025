import './App.css'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import { ThemeProvider } from './store/ThemeContext'

function App() {


  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
    </ThemeProvider>
  )
}

export default App
