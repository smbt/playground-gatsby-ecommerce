export interface BlogPost {
    frontmatter: {
        title: string
        author: string
        date: string
        path: string
    }
    html: string
}
