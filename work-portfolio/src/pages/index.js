
import React from 'react';

import Layout from '../components/layout';
import Images from '../components/image';
import Projects from '../components/project';

const IndexPage = () => (
  <div id="container">
    <Layout>
      <div id="images">
        <Projects />
      </div>
    </Layout>
  </div>
);

export default IndexPage;
