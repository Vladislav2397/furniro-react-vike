import React from 'react'
import styles from './BlogPage.module.scss'
import { CoverBreadcrumb } from '~/widgets/CoverBreadcrumb'
import { BlogPost, type Post } from './BlogPost'

export type BlogPageProps = {}

const posts: Post[] = [
    {
        id: 1,
        author: {
            id: 1,
            name: 'Admin',
        },
        coverUrl: '',
        createdAt: '2020-01-01',
        title: 'Blog Post 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        tag: 'Tag 1',
    },
    {
        id: 2,
        author: {
            id: 1,
            name: 'Admin',
        },
        coverUrl: '',
        createdAt: '2020-02-01',
        title: 'Blog Post 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        tag: 'Tag 2',
    }
]

export const BlogPage: React.FC<BlogPageProps> = () => {
    return (
        <div className={styles.root}>
            <CoverBreadcrumb title={'Blog'} />
            <div className={styles.layout}>
                <div className={styles.list}>
                    {posts.map(post => (
                        <BlogPost key={post.id} post={post} />
                    ))}
                </div>
                <aside className={styles.sidebar}>
                    <div className={styles.addition}>
                        sidebar
                    </div>
                </aside>
            </div>
        </div>
    )
}
