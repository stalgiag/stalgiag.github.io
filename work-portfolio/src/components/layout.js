/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main id="layoutMain">
        {children}
      </main>
      <footer
        style={{
          // transform: 'rotate(90deg)',
          color: 'white',
          textOrientation: 'sideways',
          writingMode: 'vertical-rl',
          paddingTop: '5%',
          position: 'fixed',
          top: '0%',
          left: '0.5rem',
          paddingLeft: '6rem',
          background: '#db0000',
          height: '100vh',
          // left: '0',
        }}
      >
        student work
        <a
          style={{
            position: 'absolute',
            bottom: '5%',
          }}
          href="stalgiagrigg@gmail.com"
        >
          contact me
        </a>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
