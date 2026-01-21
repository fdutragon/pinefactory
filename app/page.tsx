import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ScriptFeatures from '@/components/ScriptFeatures'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import DownloadSection from '@/components/DownloadSection'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <ScriptFeatures />
      <DownloadSection />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}

