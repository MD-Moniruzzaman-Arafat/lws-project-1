import './App.css'
import CompaniesLogo from './components/CompaniesLogo/CompaniesLogo'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Pricing from './components/Pricing/Pricing'
import ServiceOne from './components/ServiceOne/ServiceOne'
import ServiceTwo from './components/ServiceTwo/ServiceTwo'
import Testimonial from './components/Testimonial/Testimonial'
import Trial from './components/Trial/Trial'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <CompaniesLogo />
      <ServiceOne />
      <ServiceTwo />
      <Testimonial />
      <Pricing />
      <Faq />
      <Trial />
      <Footer />
    </>
  )
}

export default App
