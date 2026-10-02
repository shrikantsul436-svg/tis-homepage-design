import ScrollProgress from './components/animation/ScrollProgress'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Sports from './components/sections/Sports'
import Personalities from './components/sections/Personalities'
import Testimonials from './components/sections/Testimonials'
import Admission from './components/sections/Admission'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Sports />
        <Personalities />
        <Testimonials />
        <Admission />
      </main>
      <Footer />
    </>
  )
}