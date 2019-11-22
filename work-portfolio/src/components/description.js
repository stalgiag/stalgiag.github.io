import React from 'react';

const Description = ({ children }) => {
  const description = (
    <>
      <div
        style={{
          background: 'green',
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
          marginBottom: '1rem',
        }}
      >
        <main>{children}</main>
      </div>
    </>
  );

  return description;
};

export default Description;
