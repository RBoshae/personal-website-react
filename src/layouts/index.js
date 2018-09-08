import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link';
import Navbar from '../components/Navbar'
import './index.css'
import icon32 from '../assets/images/logo/PersonalWebLogo.png'


const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Portfolio' },
        { name: 'keywords', content: 'webdev, software engineer, gatsbyjs, reactjs, frontend, graphql, design' },
      ]}
      link={[
      { rel: 'shortcut icon', type: 'image/png', href: `${icon32}` }
  ]}
    />

    <div
      style={{
        margin: '0 auto',
        maxWidth: '49rem',
        padding: '1.25rem 1rem',
      }}
    >

      <Navbar siteTitle={data.site.siteMetadata.title}/>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
