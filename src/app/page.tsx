import { redirect } from 'next/navigation';

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
	redirect('/en');
}
// 'use client';
// import AboutSection from '@/components/Sections/AboutSection/AboutSection';
// import { FeaturedProductsSection } from '@/components/Sections/FeaturedProductsSection/FeaturedProductsSection';
// import HeroSection from '@/components/Sections/HeroSection/HeroSection';
// import HitSection from '@/components/Sections/HitSection/HitSection';
// import InfoSection from '@/components/Sections/InfoSection/InfoSection';
// import ProductsSection from '@/components/Sections/ProductsSection/ProductsSection';
// import TestimonialsSection from '@/components/Sections/TestimonialsSection/TestimonialsSection';
// import '@mantine/carousel/styles.css';
// import { TeamSection } from '@/components/Sections/TeamSection/TeamSection';
// import { ProductContextProvider } from '@/context/ProductContext';
// import matter from 'gray-matter';

// export default async function Home() {
// 	const allProducts = await getProducts();

// 	return (
// 		<ProductContextProvider allProducts={allProducts}>
// 			<HeroSection />
// 			<InfoSection />
// 			<FeaturedProductsSection />
// 			<AboutSection />
// 			<ProductsSection />
// 			<TeamSection />
// 			<HitSection />
// 			<TestimonialsSection />
// 		</ProductContextProvider>
// 	)
// }

// const getProducts = async () => {
// 	const res = await import(`@/data/products.json`);
// 	const allProducts = await res.allProducts;
// 	const featuredProducts: any = allProducts
// 		.find(({ title }: { title: string }) => title === 'FEATURED_PRODUCTS');

// 	return Promise.all(
// 		featuredProducts?.products.map(async ({ slug }: { slug: string }) => {
// 			return getContent({ slug });
// 		})
// 	)
// }
// async function getContent({ slug }: { slug: string }) {
// 	const post = await import(`@/data/posts/${slug}.md`)
// 	const { data, content } = matter(post.default)

// 	return {
// 		frontmatter: data,
// 		markdownBody: content,
// 		link: `posts/${slug}`
// 	}
// }