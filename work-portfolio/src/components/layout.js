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

const Layout = ({ collectionTitle, children }) => {
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
      <footer className="footer">
        {collectionTitle}
        <a
          style={{
            position: 'absolute',
            bottom: '5%',
          }}
          href="mailto:stalgia.grigg@gmail.com"
        >
          contact
        </a>
      </footer>
    </>
  );
};

Layout.propTypes = {
  collectionTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
