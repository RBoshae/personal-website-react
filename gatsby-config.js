module.exports = {
  siteMetadata: {
    title: 'Rick Boshae',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    // Shorcut for adding plugins without options.
    'gatsby-plugin-react-helmet',
    {
        // Standard plugin with options
        resolve: 'gatsby-plugin-typography',
        options: {
          pathToConfigModule: 'src/utils/typography.js',
        },
    },
  ],
  pathPrefix: `/rboshae.github.io`,
}
