const path = require('path')

require(`dotenv`).config({
    path: `.env.development`,
})

module.exports = {
    siteMetadata: {
        title: `playground-gatsby-ecommerce`,
        description: `-`,
        author: `Simon Brandt`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-stripe`,
        `gatsby-plugin-playground`,
        `gatsby-plugin-material-ui`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown`,
                path: `${__dirname}/src/markdown/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                target: 'es5',
                lib: ['dom', 'dom.iterable', 'esnext'],
                allowJs: true,
                skipLibCheck: true,
                esModuleInterop: true,
                allowSyntheticDefaultImports: true,
                strict: true,
                forceConsistentCasingInFileNames: true,
                module: 'esnext',
                moduleResolution: 'node',
                resolveJsonModule: true,
                isolatedModules: true,
                noEmit: true,
                jsx: 'preserve',
                baseUrl: 'src',
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#f9f4ed`,
                theme_color: `#f9f4ed`,
                display: `minimal-ui`,
                // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-source-stripe`,
            options: {
                objects: [`Product`, `Sku`],
                secretKey: process.env.STRIPE_SK_TEST,
                downloadFiles: true,
            },
        },
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    components: path.resolve(__dirname, `src/components`),
                    context: path.resolve(__dirname, `src/context`),
                    constants: path.resolve(__dirname, `src/constants`),
                    markdown: path.resolve(__dirname, `src/markdown`),
                    pages: path.resolve(__dirname, `src/pages`),
                    styles: path.resolve(__dirname, `src/styles`),
                    templates: path.resolve(__dirname, `src/templates`),
                    types: path.resolve(__dirname, `src/types`),
                },
            },
        },
    ],
}