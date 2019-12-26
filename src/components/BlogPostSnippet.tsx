import React from 'react'

import { BlogPost } from 'types/BlogPost'
import { Link } from 'gatsby'

type Props = {
    blogPost: BlogPost
}

export default function BlogPostSnippet(props: Props) {
    const { frontmatter } = props.blogPost

    return (
        <div>
            <div>
                <h1>{frontmatter.title}</h1>
                <h4> {frontmatter.date}</h4>
                <Link
                    to={
                        'blog/' +
                        frontmatter.title
                            .toLowerCase()
                            .split(' ')
                            .join('-')
                    }
                    style={{ color: 'black' }}
                >
                    Read article
                </Link>
            </div>
        </div>
    )
}
