import matter from "gray-matter"
import { cache } from "react";
import path from 'path'
import fs from 'fs/promises'

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
// `cache` is a React 18 feature that allows you to cache a function for the lifetime of a request.
// this means getPosts() will only be called once per page build, even though we may call it multiple times
// when rendering the page.
export const getPosts = cache(async (locale: string, category?: string) => {
    const DATA_PATH = `./src/data/posts/${locale}`;
    const files = await fs.readdir(`${DATA_PATH}`);

    return Promise.all(
        files
            .filter((file) => path.extname(file) === '.md')
            .map(async (file) => {
                const filePath = `${DATA_PATH}/${file}`
                const fileContent = await fs.readFile(filePath, 'utf8')
                const { data, content } = matter(fileContent);

                return { data, body: content }
            })
    )
});

// export async function getCollectionItem(slug: string, name: string) {
//     const items = await getCollection(name);
//     return items.find((item) => item?.slug === slug)
// }
export async function getPostBySlug({ locale, slug }: { locale: string, slug: string }) {
    const post = await import(`@/data/posts/${locale}/${slug}.md`)
    const { data, content } = matter(post.default)

    return {
        frontmatter: data,
        markdownBody: content,
        link: `/posts/${slug}`
    }
}

export async function getContent({ locale, slug }: { locale: string, slug: string }) {
    const content = await import(`@/data/posts/${locale}/${slug}.md`)
    const data = matter(content.default)

    return {
        frontmatter: data.data,
        markdownBody: data.content,
    }
}