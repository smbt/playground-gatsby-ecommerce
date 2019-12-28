export interface BlogPost {
    frontmatter: {
        templateKey: string
        title: string
        date: string
        featuredpost: string
        tags: string[]
    }
    id: number
    excerpt: string
    html: string
}
