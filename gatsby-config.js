/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
		title: `Chintan Agrawal`,
		description: `I mainly write about big data technnologies`,
		author: {
      name: `Jibin Thomas`,
    },
    siteUrl: `http://localhost:8000/`,
    social: {
      twitter: '@real_jibin',
    }
	},
  plugins: [
    'gatsby-plugin-root-import',
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			}
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [ `gatsby-remark-images` ],
        plugins: [ `gatsby-remark-images` ],
        extensions: [`.mdx`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chintan Agrawal`,
        short_name: `Chintan Agrawal`,
        start_url: `/`,
        background_color: `#F1F1F1`,
        theme_color: `#F1F1F1`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
        include_favicon: true,
      },
    }
  ]
}