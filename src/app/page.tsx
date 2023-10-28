import AboutSection from '@/components/containers/AboutSection/AboutSection';
import HeroSection from '@/components/containers/HeroSection/HeroSection';
import HitSection from '@/components/containers/HitSection/HitSection';
import InfoSection from '@/components/containers/InfoSection/InfoSection';
import SurgerySection from '@/components/containers/SurgerySection/SurgerySection';

export default function Home() {
	return (
		<>
			<HeroSection />
			<InfoSection />
			<AboutSection />
			<HitSection />
			<SurgerySection />
		</>
	)
}
