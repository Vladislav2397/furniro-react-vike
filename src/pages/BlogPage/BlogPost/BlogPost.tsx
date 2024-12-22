import React from 'react'
import styles from './BlogPost.module.scss'
import clsx from 'clsx'

type UrlString = string

export type Post = {
    id: number
    coverUrl: UrlString
    author: {
        id: number
        name: string
    }
    createdAt: string
    tag: string
    title: string
    description: string
}

export type BlogPostProps = {
    post: Post
    className?: string
}

export const BlogPost: React.FC<BlogPostProps> = ({ post, className }) => {
    return (
        <div className={clsx(styles.root, className)}>
            <div className={styles.image}>
                <img src={post.coverUrl} alt={'cover'} />
            </div>
            <div className={styles.meta}>
                <div className={styles.user}>{post.author.name}</div>
                <div className={styles.date}>{post.createdAt}</div>
                <div className={styles.tag}>{post.tag}</div>
            </div>
            <div className={styles.title}>{post.title}</div>
            <div className={styles.description}>{post.description}</div>
            <div className={styles.action}>
                Read More
            </div>
        </div>
    )
}
