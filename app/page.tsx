import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/Components/Hero";
import Summary from "@/Components/Summary";
import ServicesCarousel from '@/Components/ServicesCarousel' 
import WhyUsSection from '@/Components/WhyUs' 
import FeedbackSection from "@/Components/Feedbacks"
import GallerySection from '@/Components/Gallery' 
import CTASection from  '@/Components/CTASection'
import Footer from  '@/Components/Footer'

export default function Home() {
  return (
    <>
    
        {/* <MyNavbar /> */}
        <HeroSection />
        <Summary />
        <ServicesCarousel />
        <WhyUsSection />
        <FeedbackSection />
        <GallerySection />
        <CTASection />
        {/* <Footer /> */}
    </>
  );
}
