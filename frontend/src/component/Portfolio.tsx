import CodeBackground from './CodeBackground'
import PortfolioSlider from './PortfolioSlider'

const Portfolio = () => {
  return (
    <>
      <CodeBackground />
      <div style={{ position: 'absolute' }}>
        <PortfolioSlider />
      </div>
    </>
  )
}

export default Portfolio