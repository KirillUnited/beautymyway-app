import AboutSection from '@/components/containers/AboutSection/AboutSection';
import FeaturedProductsSection from '@/components/containers/FeaturedProductsSection/FeaturedProductsSection';
import HeroSection from '@/components/containers/HeroSection/HeroSection';
import HitSection from '@/components/containers/HitSection/HitSection';
import InfoSection from '@/components/containers/InfoSection/InfoSection';
import SurgerySection from '@/components/containers/SurgerySection/SurgerySection';
import WhySection from '@/components/containers/WhySection/WhySection';

export default function Home() {
	return (
		<>
			<HeroSection />
			<InfoSection />
			<FeaturedProductsSection />
			<AboutSection />
			<WhySection />
			<HitSection />
			<SurgerySection />
		</>
	)
}
