import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Portfolio } from '@/components/sections/Portfolio'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Testimonials } from '@/components/sections/Testimonials'
import { Location } from '@/components/sections/Location'
import { FAQ } from '@/components/sections/FAQ'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'

export default function App() {
  return (
    <>
      <SchemaMarkup />
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Testimonials />
        <Location />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
