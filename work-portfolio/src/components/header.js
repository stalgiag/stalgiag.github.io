import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: 'transparent',
      border: '4px solid #db0000',
      marginBottom: '1.45rem',
      margin: '10%',
    }}
  >
    <div
      style={{
        width: '100%',
        // padding: '4rem 1rem 0 0',

      }}
    >
      <h1 style={{ margin: 'auto' }}>
        <Link
          to="/"
          style={{
            color: '#DB0000',
            textStyle: 'bold',
            fontSize: '8rem',
            textDecoration: 'none',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            display: 'block',
            margin: '-2rem',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
