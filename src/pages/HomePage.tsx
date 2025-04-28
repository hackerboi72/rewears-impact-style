
import Hero from "@/components/Hero";
import MissionSection from "@/components/home/MissionSection";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import CSRPartnership from "@/components/home/CSRPartnership";
import ImpactSection from "@/components/home/ImpactSection";
import CTASection from "@/components/home/CTASection";

const HomePage = () => {
  return (
    <div>
      <Hero
        title="Turn Waste into Style. Turn Style into Impact."
        subtitle="ReWear transforms discarded clothing into stylish, sustainable fashion while supporting artisans and communities worldwide. For every purchase, we donate a new clothing item to a child in need."
        ctaText="Shop Now"
        ctaLink="/shop"
        imageSrc="https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?q=80&w=1200"
        imageAlt="Person wearing sustainable fashion"
      />
      <MissionSection />
      <FeaturedCollection />
      <CSRPartnership />
      <ImpactSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
