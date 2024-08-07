import React from 'react'
import Image from "next/image"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import styles from "@/styles/post.module.scss";
import { locales } from '@/i18n.config';
import { getPostBySlug } from '@/lib/api/posts';

type Props = {
    params: {
        locale: string,
        slug: string
    }
}

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
    const { frontmatter } = await getPostBySlug(params);

    return {
        title: frontmatter.title,
    }
}

export default async function ServiceTemplate({ params }: Props) {
    const { frontmatter, markdownBody } = await getPostBySlug(params);

    return (
        <article className={styles.root}>
            {
                frontmatter.hero_image
                &&
                <div className="container max-w-6xl">
                    <figure className={styles.hero}>
                        <Image
                            width="1920"
                            height="600"
                            src={`/images/posts/${frontmatter.hero_image}`}
                            alt={`${frontmatter.title}`}
                            className={`${styles['hero-image']}`}
                            quality={100}
                            priority
                            placeholder='blur'
                            blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 10 6'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='.5'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Cimage filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAA70lEQVR4AQXBTUvCcADA4Z/7z9xcmbEpdSg6CBYGRUcr6WJvUESfqHN07Jt47hBdBV/AFg2FYTGd2DZzmJiz54ndnpUX51cldvcvSWoqufwGcVlgmlX01CpLmsbD4xMiZ2zeS8MQNRgQX1Gweg6/owGvLxUyxjq2+4VtO8haPIGKxKfdxfpzmUgKruMSxX4QiqDfs2i1A+RwMmM+hsr4nbSvcnNaZHnqE8yTNDpvROGU7FYSueX3MUcuqbUExYsd9jICY66yyOrUm22aHY/vmYec304jRIRuaJROjmg8V/G8IXflawoHhxx/1KjVu/wDycJbrJ7yuz0AAAAASUVORK5CYII='/%3E%3C/svg%3E"
                        />
                    </figure>
                </div>
            }
            <div className={styles.body}>
                <ReactMarkdown>{`${markdownBody}`}</ReactMarkdown>
            </div>
        </article>
    )
}

async function getContent({ locale, slug }: { locale: string, slug: string }) {
    const content = await import(`@/data/posts/${locale}/${slug}.md`)
    const data = matter(content.default)

    return {
        frontmatter: data.data,
        markdownBody: data.content,
    }
}
