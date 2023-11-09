'use client';
import AboutSection from '@/components/containers/AboutSection/AboutSection';
import FeaturedProductsSection from '@/components/containers/FeaturedProductsSection/FeaturedProductsSection';
import FeedsSection from '@/components/containers/FeedsSection/FeedsSection';
import HeroSection from '@/components/containers/HeroSection/HeroSection';
import HitSection from '@/components/containers/HitSection/HitSection';
import InfoSection from '@/components/containers/InfoSection/InfoSection';
import ProductsSection from '@/components/containers/ProductsSection/ProductsSection';
import SurgerySection from '@/components/containers/SurgerySection/SurgerySection';
import WhySection from '@/components/containers/WhySection/WhySection';
import { createTheme, MantineProvider } from '@mantine/core';
import TestimonialsSection from '@/components/containers/TestimonialsSection/TestimonialsSection';
import '@mantine/carousel/styles.css';

const theme = createTheme({
	colors: {
		'primary': [
			"#f5f5f5",
			"#e7e7e7",
			"#cdcdcd",
			"#b2b2b2",
			"#9a9a9a",
			"#8b8b8b",
			"#848484",
			"#717171",
			"#656565",
			"#575757"
		],
	}
});

export default function Home() {
	return (
		<MantineProvider theme={theme}>
			<HeroSection />
			<InfoSection />
			<FeaturedProductsSection />
			<AboutSection />
			<ProductsSection />
			<WhySection />
			<HitSection />
			<TestimonialsSection />
			<FeedsSection />
			<SurgerySection />
		</MantineProvider>
	)
}
