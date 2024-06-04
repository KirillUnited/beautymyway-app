import matter from "gray-matter"

export const getFeaturedProductPosts = async (locale: string) => {
	const res = await import(`@/data/products.json`);
	const allProducts = await res.allProducts;
	const featuredProducts: any = allProducts
		.find(({ title }: { title: string }) => title === 'FEATURED_PRODUCTS');

	return Promise.all(
		featuredProducts?.products.map(async ({ slug }: { slug: string }) => {
			return getPostBySlug({ locale, slug });
		})
	)
}
export const getProductPosts = async (locale: string) => {
	
}
export async function getPostBySlug({ locale, slug }: { locale: string, slug: string }) {
    const post = await import(`@/data/posts/${locale}/${slug}.md`)
    const { data, content } = matter(post.default)

    return {
        frontmatter: data,
        markdownBody: content,
        link: `/posts/${locale}/${slug}`
    }
}