
import React from 'react';

import Layout from '../../components/layout';
import Projects from '../../components/project';
import modifyVariables from '../../components/utilities';

import '../styles/base.scss';

const IndexPage = () => (
  <div id="container">
    {modifyVariables('red', 'rgba(0, 139, 139, 0.3)', 'rgba(255, 255, 255, 0.5)')}
    <Layout collectionTitle="collaborative & commercial work">
      <div id="images">
        <Projects workType="collab" />
      </div>
    </Layout>
  </div>
);

export default IndexPage;
