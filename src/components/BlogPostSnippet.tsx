import React from 'react'

import { BlogPost } from 'types/BlogPost'
import { Link } from 'gatsby'

type Props = {
    blogPost: BlogPost
}

export default function BlogPostSnippet(props: Props) {
    const { blogPost } = props
    const { frontmatter } = blogPost

    return (
        <div>
            <div>
                <h2>{frontmatter.title}</h2>
                <div style={{color: '#666', marginBottom: 20, fontFamily: 'sans-serif'}}>Published: {frontmatter.date}</div>
                <div style={{marginBottom: 30}}>{props.blogPost.excerpt}</div>
                <Link
                    to={
                        'blog/' +
                        frontmatter.title
                            .toLowerCase()
                            .split(' ')
                            .join('-')
                    }
                    style={{ color: 'black', float: 'right' }}
                >
                    Read article
                </Link>
            </div>
        </div>
    )
}
