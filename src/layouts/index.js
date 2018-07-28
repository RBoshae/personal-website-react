import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link';
import Navbar from '../components/Navbar'
import './index.css'

const ListLink = props =>
  <li
    style={{ display: 'inline-block', marginRight: '1rem'}}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Portfolio' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <div
      style={{
        margin: '0 auto',
        maxWidth: '49rem',
        padding: '1.25rem 1rem',
      }}
    >
      <header style={{ marginBottom: '2.5rem' }}>
        <Link to="/" style={{ textShadow: 'none', backroundImage: 'none'}}>
          <h3 style={{ display: 'inline'}}>{data.site.siteMetadata.title}</h3>
        </Link>
        <ul style={{ listStyle: 'none', float: 'right'}}>
          <ListLink to="/">Projects</ListLink>
          <ListLink to="/">Resume</ListLink>
          <ListLink to="/">Blog</ListLink>
          <ListLink to="/">Contact</ListLink>
        </ul>
      </header>

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
