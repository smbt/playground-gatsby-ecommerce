require(`dotenv`).config({
  path: `.env.development`,
});


module.exports = {
  siteMetadata: {
    title: `playground-gatsby-ecommerce`,
    description: `-`,
    author: `Simon Brandt`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-stripe`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${ __dirname }/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `rebeccapurple`,
        theme_color: `rebeccapurple`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: [`Product`, `Sku`],
        secretKey: process.env.STRIPE_SECRET_KEY_READ_PRODUCTS_AND_SKUS,
        downloadFiles: true,
      },
    },
  ],
}
