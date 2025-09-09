import './App.css'
import CompaniesLogo from './components/companiesLogo/CompaniesLogo'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import ServiceOne from './components/serviceOne/ServiceOne'
import ServiceTwo from './components/serviceTwo/ServiceTwo'
import Testimonial from './components/testimonial/Testimonial'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CompaniesLogo />
      <ServiceOne />
      <ServiceTwo />
      <Testimonial />
    </>
  )
}

export default App
