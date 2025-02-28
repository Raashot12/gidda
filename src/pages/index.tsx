import MainLayout from "@/components/GiddaaLandingPage/layout/MainLayout"
import HeroSection from "@/components/GiddaaLandingPage/Shortlets/HeroSection"
import ProductsSection from "@/components/GiddaaLandingPage/Shortlets/ProductsSection"
import OurPartnersSection from "@/components/GiddaaLandingPage/Shortlets/OurPartnersSection"
import WhyGiddaaSection from "@/components/GiddaaLandingPage/Shortlets/WhyGiddaaSection"
import PeopleTalkSection from "@/components/GiddaaLandingPage/Shortlets/PeopleTalkSection"
import KnowMoreAboutUsSection from "@/components/GiddaaLandingPage/Shortlets/KnowMoreAboutUsSection"
import GetStartedSection from "@/components/GiddaaLandingPage/Shortlets/GetStartedSection"

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ProductsSection />
      <OurPartnersSection />
      <WhyGiddaaSection />
      <PeopleTalkSection />
      <KnowMoreAboutUsSection />
      <GetStartedSection />
    </MainLayout>
  )
}
