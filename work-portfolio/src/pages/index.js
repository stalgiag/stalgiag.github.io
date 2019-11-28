
import React from 'react';

import Layout from '../components/layout';
import Projects from '../components/project';

import './student-work.scss';

const IndexPage = () => (
  <div id="container">
    <Layout collectionTitle="student work">
      <div id="images">
        <Projects workType="student" />
      </div>
    </Layout>
  </div>
);

export default IndexPage;
