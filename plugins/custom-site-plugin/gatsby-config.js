module.exports = ({ basePath = `/`, mdx = true }) => ({
  siteMetadata: {
    siteTitle: `Vishal Ramanand Sharma Portfolio`,
    siteTitleAlt: `Portfolio by Vishal Ramanand Sharma`,
    siteHeadline: `Portfolio by Vishal Ramanand Sharma`,
    siteUrl: `https://cara.lekoarts.de`,
    siteDescription: `Portfolio by Vishal Ramanand Sharma`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@vishals9711`,
    basePath,
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `sections`,
    //     path: `${__dirname}/src/sections`,
    //   },
    // },
    mdx && {
      resolve: `gatsby-plugin-mdx`,
      options: {
        lessBabel: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
  ].filter(Boolean),
})
