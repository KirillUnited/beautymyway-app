import React from 'react'
import Image from "next/image"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import styles from "@/styles/Service.module.scss";

type Props = {
    params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
    const { frontmatter } = await getContent(params);

    return {
        title: frontmatter.title,
    }
}

export default async function ServiceTemplate({ params }: Props) {
    const { frontmatter, markdownBody } = await getContent(params);

    return (
        <article className={styles.root}>
            <div className="container">
                <figure className={styles.hero}>
                    <Image
                        width="1920"
                        height="600"
                        src={`/images/services/${frontmatter.hero_image}`}
                        alt={`${frontmatter.title}`}
                        className='object-cover aspect-video max-h-[65vh]'
                    />
                </figure>
                <div className={styles.body}>
                    <ReactMarkdown>{`${markdownBody}`}</ReactMarkdown>
                </div>
            </div>
        </article>
    )
}

async function getContent({ slug }: { slug: string }) {
    const content = await import(`@/data/services/${slug}.md`)
    const data = matter(content.default)

    return {
        frontmatter: data.data,
        markdownBody: data.content,
    }
}
