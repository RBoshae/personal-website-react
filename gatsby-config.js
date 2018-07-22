module.exports = {
  siteMetadata: {
    title: 'Rick Boshae',
  },
  plugins: [
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
}
