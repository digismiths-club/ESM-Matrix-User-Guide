import Image from 'next/image'
import About from './About'
import Faqs from './Faqs'
import Features from './Features'
import AwardBanner from './AwardBanner'

function LandingPage() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center overflow-x-hidden gap-6">
        <About/>
        {/* <AwardBanner/> */}
        <Features/>
        <Faqs/>
      </main>
    </>
  )
}

export default LandingPage
