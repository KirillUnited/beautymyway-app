import type { MetadataRoute } from 'next'

const BASE_URL = 'https://beautymyway.es'
const POSTS = [
    'nutriciologiya',
    'trenirovki',
    'psihologiya',
    'fotoepilyatsiya',
]

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            alternates: {
                languages: {
                    es: `${BASE_URL}/es`,
                    ru: `${BASE_URL}/ru`,
                    en: `${BASE_URL}/en`,
                },
            },
        },
        ...POSTS.map((slug) => ({
            url: `${BASE_URL}/ru/posts/${slug}`,
            lastModified: new Date(),
            alternates: {
                languages: {
                    es: `${BASE_URL}/es/posts/${slug}`,
                    ru: `${BASE_URL}/ru/posts/${slug}`,
                    en: `${BASE_URL}/en/posts/${slug}`,
                },
            },
        })),
    ]
}
