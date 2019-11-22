import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: 'transparent',
      border: '2px solid #db0000',
      marginBottom: '-1.45rem',
      position: 'fixed',
      height: '100%',
      left: '8rem',
    }}
  >
    <div>
      <h1>
        <Link
          to="/"
          style={{
            textOrientation: 'sideways',
            WebkitTransform: 'scale(-1, -1)',
            MozTransformOrigin: 'scale(-1, -1)',
            writingMode: 'vertical-rl',
            color: '#DB0000',
            fontSize: '2.2rem',
            textDecoration: 'none',
            marginRight: '-0.1rem',
            marginLeft: '-0.25rem',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            marginTop: '0 auto',
            marginBottom: '0 auto',
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
