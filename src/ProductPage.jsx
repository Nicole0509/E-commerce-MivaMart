import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import HeroSection from './HeroSection'
import FeaturedProducts from './FeaturedProducts'
import Header2 from './Header2'
import './responsive.css'

export default function App() {
  return (
    <main>
      <Navbar/>
      <Header2 label="Products"/>
      <HeroSection/>
      <FeaturedProducts rows={4} />
      <Footer/>
    </main>
  )
}
