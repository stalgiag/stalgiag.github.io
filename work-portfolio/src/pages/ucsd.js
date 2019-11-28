
import React from 'react';

import Layout from '../components/layout';
import Projects from '../components/project';

import './ucsd.scss';

const UCSD = () => (
  <div id="container">
    <Layout collectionTitle="personal work">
      <div id="images">
        <Projects workType="ucsd" />
      </div>
    </Layout>
  </div>
);

export default UCSD;
