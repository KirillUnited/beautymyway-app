'use client';
import AboutSection from './containers/AboutSection/AboutSection';
import { FeaturedProductsSection } from './containers/FeaturedProductsSection/FeaturedProductsSection';
import HeroSection from './containers/HeroSection/HeroSection';
import HitSection from './containers/HitSection/HitSection';
import InfoSection from './containers/InfoSection/InfoSection';
import ProductsSection from './containers/ProductsSection/ProductsSection';
import { createTheme, MantineProvider } from '@mantine/core';
import TestimonialsSection from './containers/TestimonialsSection/TestimonialsSection';
import '@mantine/carousel/styles.css';
import { TeamSection } from './containers/TeamSection/TeamSection';
import { ProductContextProvider } from '@/context/ProductContext';
import matter from 'gray-matter';

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

export default async function Home() {
	const allProducts = await getProducts();

	return (
		<MantineProvider theme={theme}>
			<ProductContextProvider allProducts={allProducts}>
				<HeroSection />
				<InfoSection />
				<FeaturedProductsSection />
				<AboutSection />
				<ProductsSection />
				<TeamSection />
				<HitSection />
				<TestimonialsSection />
			</ProductContextProvider>
		</MantineProvider>
	)
}

const getProducts = async () => {
	const res = await import(`@/data/products.json`);
	const allProducts = await res.allProducts;
	const featuredProducts: any = allProducts
		.find(({ title }: { title: string }) => title === 'FEATURED_PRODUCTS');

	return Promise.all(
		featuredProducts?.products.map(async ({ slug }: { slug: string }) => {
			return getContent({ slug });
		})
	)
}
async function getContent({ slug }: { slug: string }) {
	const post = await import(`@/data/posts/${slug}.md`)
	const { data, content } = matter(post.default)

	return {
		frontmatter: data,
		markdownBody: content,
		link: `posts/${slug}`
	}
}