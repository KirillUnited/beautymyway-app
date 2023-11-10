'use client';
import AboutSection from './containers/AboutSection/AboutSection';
import FeaturedProductsSection from './containers/FeaturedProductsSection/FeaturedProductsSection';
import FeedsSection from './containers/FeedsSection/FeedsSection';
import HeroSection from './containers/HeroSection/HeroSection';
import HitSection from './containers/HitSection/HitSection';
import InfoSection from './containers/InfoSection/InfoSection';
import ProductsSection from './containers/ProductsSection/ProductsSection';
import SurgerySection from './containers/SurgerySection/SurgerySection';
import WhySection from './containers/WhySection/WhySection';
import { createTheme, MantineProvider } from '@mantine/core';
import TestimonialsSection from './containers/TestimonialsSection/TestimonialsSection';
import '@mantine/carousel/styles.css';
import TeamSection from './containers/TeamSection/TeamSection';

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
			<TeamSection />
			<WhySection />
			<HitSection />
			<TestimonialsSection />
			<FeedsSection />
			<SurgerySection />
		</MantineProvider>
	)
}
