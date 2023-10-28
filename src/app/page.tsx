import AboutSection from '@/components/containers/AboutSection/AboutSection';
import HitSection from '@/components/containers/HitSection/HitSection';
import InfoSection from '@/components/containers/InfoSection/InfoSection';
import SurgerySection from '@/components/containers/SurgerySection/SurgerySection';

export default function Home() {
	return (
		<>
			<InfoSection />
			<AboutSection />
			<HitSection />
			<SurgerySection />
		</>
	)
}
