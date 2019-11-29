
import React from 'react';

import Layout from '../../components/layout';
import Projects from '../../components/project';
import modifyVariables from '../../components/utilities';

import '../styles/base.scss';

const UCSD = () => (
  <div id="container">
    {modifyVariables('red')}
    <Layout collectionTitle="personal work">
      <div id="images">
        <Projects workType="ucsd" />
      </div>
    </Layout>
  </div>
);

export default UCSD;
