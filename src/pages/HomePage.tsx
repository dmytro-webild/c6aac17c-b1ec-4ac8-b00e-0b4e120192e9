import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTwoColumn from '@/components/sections/faq/FaqTwoColumn';
import FeaturesBentoGrid from '@/components/sections/features/FeaturesBentoGrid';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroBillboardBrand from '@/components/sections/hero/HeroBillboardBrand';
import TestimonialQuoteCards from '@/components/sections/testimonial/TestimonialQuoteCards';
import { Award, Calendar, CheckCircle, Search, Shield, Sparkles, Truck } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardBrand
      brand="Premium Mobile Car Valeting & Detailing"
      description="Professional vehicle care brought directly to you. Expert attention to every detail."
      primaryButton={{
        text: "Get A Quote",
        href: "#quote",
      }}
      secondaryButton={{
        text: "View Our Work",
        href: "#work",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/stylish-rear-light-new-dark-auto_23-2147963019.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="why-us" data-section="why-us">
    <SectionErrorBoundary name="why-us">
          <AboutFeaturesSplit
      tag="Why Us"
      title="Unrivalled Vehicle Care"
      description="We blend convenience with professional-grade detailing techniques to ensure your vehicle looks as good as the day it left the showroom."
      items={[
        {
          icon: Truck,
          title: "We Come To You",
          description: "Professional care at your home or workplace.",
        },
        {
          icon: Search,
          title: "Attention To Detail",
          description: "Every nook and cranny meticulously cleaned.",
        },
        {
          icon: Award,
          title: "Professional Finish",
          description: "Excellence in every polish and protection.",
        },
        {
          icon: Calendar,
          title: "Convenient Booking",
          description: "Easy online scheduling for your busy life.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-car-care-process_23-2149193628.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesBentoGrid
      tag="Our Services"
      title="Comprehensive Detailing"
      description="Tailored packages designed to maintain and protect your vehicle’s aesthetic value."
      features={[
        {
          title: "Full Interior Detail",
          description: "Deep clean and upholstery treatment.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-car-interior-clean-up-service_23-2149212260.jpg",
        },
        {
          title: "Exterior Paint Correction",
          description: "Scratch removal and high-gloss polish.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-white-shirt-wipes-car-car-wash_1157-27233.jpg",
        },
        {
          title: "Alloy Wheel Care",
          description: "Deep clean and protection for wheels.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-cleaning-car-rims_23-2148194113.jpg",
        },
        {
          title: "Ceramic Coating",
          description: "Long-lasting paint protection finish.",
          imageSrc: "http://img.b2bpic.net/free-photo/service-worker-painting-car-auto-service_23-2149486993.jpg",
        },
      ]}
      primaryButton={{
        text: "Get A Quote",
        href: "#quote",
      }}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="work" data-section="work">
    <SectionErrorBoundary name="work">
          <FeaturesImageBento
      tag="Our Work"
      title="The Quality Difference"
      description="See the results of our dedication to vehicle aesthetics."
      items={[
        {
          title: "Interior Restoration",
          description: "Before & After",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-car-interior-with-steering-wheel-infotainment-system-screen_482257-118089.jpg",
        },
        {
          title: "Paint Correction",
          description: "Gloss finish",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-cleaning-car-exterior_23-2148194092.jpg",
        },
        {
          title: "Engine Bay Detail",
          description: "Clean finish",
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-woman-repairing-car_23-2150171283.jpg",
        },
        {
          title: "Leather Care",
          description: "Restored finish",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-car-interior-clean-up-service_23-2149212253.jpg",
        },
        {
          title: "Wheel Detailing",
          description: "Deep clean",
          imageSrc: "http://img.b2bpic.net/free-photo/man-wash-car-using-shampoo_1150-6983.jpg",
        },
        {
          title: "Exterior Protection",
          description: "Ceramic finish",
          imageSrc: "http://img.b2bpic.net/free-photo/person-working-car-wrapping_23-2149342625.jpg",
        },
        {
          title: "Full Valet",
          description: "Showroom ready",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-cleaning-car-exterior_23-2148194110.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="reviews" data-section="reviews">
    <SectionErrorBoundary name="reviews">
          <TestimonialQuoteCards
      tag="Reviews"
      title="Client Success Stories"
      description="Genuine feedback from local customers who trust their vehicles to our expertise."
      testimonials={[
        {
          name: "John D.",
          role: "Luxury Sedan Owner",
          quote: "The best mobile detail I have ever had. The attention to detail is truly incredible.",
          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-with-protective-face-mask-standing-auto-repair-shop-looking-camera_637285-11579.jpg",
        },
        {
          name: "Sarah M.",
          role: "Family SUV Owner",
          quote: "Convenient, professional and my car looks brand new again. Highly recommended.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-choosing-car-car-showroom_1303-21752.jpg",
        },
        {
          name: "David L.",
          role: "Sports Car Enthusiast",
          quote: "Expert paint correction. The finish on my paintwork is flawless.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-smiling-man-who-chooses-new-car-cabin_146671-19461.jpg",
        },
        {
          name: "Emma R.",
          role: "Business Owner",
          quote: "Great service at my workplace. Very convenient for a busy professional.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-enjoying-her-financially-independence-while-buying-car_23-2149434350.jpg",
        },
        {
          name: "Mark S.",
          role: "Regular Client",
          quote: "Professional, punctual and reliable. Best mobile service in the area.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-car-showroom_1303-17460.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutFeaturesSplit
      tag="About Us"
      title="Mobile Detailing Excellence"
      description="We bring premium detailing tools, eco-friendly products and years of experience directly to your door, treating every vehicle with the care of an enthusiast."
      items={[
        {
          icon: CheckCircle,
          title: "Mobile First",
          description: "We come to your convenience.",
        },
        {
          icon: Shield,
          title: "Insured & Certified",
          description: "Peace of mind for your vehicle.",
        },
        {
          icon: Sparkles,
          title: "High-Quality Products",
          description: "Premium supplies for superior results.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/asian-man-wear-all-black-posed-near-suv-car-smoke-hookah_627829-3706.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTwoColumn
      tag="FAQ"
      title="Common Questions"
      description="Answers to your queries regarding our mobile services and booking process."
      items={[
        {
          question: "What areas do you cover?",
          answer: "We provide mobile services within a 20-mile radius of our base. Please contact us to confirm your postcode.",
        },
        {
          question: "Do I need to provide water/power?",
          answer: "We are fully self-sufficient. We carry our own high-quality water and electricity supply.",
        },
        {
          question: "How long does a valet take?",
          answer: "Depending on the service, usually between 2 to 6 hours for a full detail.",
        },
        {
          question: "Can you work at my office?",
          answer: "Yes, as long as we have sufficient space and permission, we can work at your workplace.",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="quote" data-section="quote">
    <SectionErrorBoundary name="quote">
          <ContactCta
      tag="Get A Quote"
      text="Ready to give your car the finish it deserves? Request a quote for your vehicle today."
      primaryButton={{
        text: "REQUEST A QUOTE",
        href: "#",
      }}
      secondaryButton={{
        text: "Message WhatsApp",
        href: "https://wa.me/123456789",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
