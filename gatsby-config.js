/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // Apply gatsby-mdx to both .mdx and .md files
        extensions: ['.mdx', '.md'],
        defaultLayout: require.resolve('./src/components/blog-post-layout.js')
      }
    },
  ]
}
