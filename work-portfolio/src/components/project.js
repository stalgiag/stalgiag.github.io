import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Images from './image';
import Description from './description';

const loadAllStudentWork = function () {
  return useStaticQuery(graphql`
    query StudentWorkQuery {
      allStudentWorkJson {
        nodes {
          path
          title
          description
          isVideo
        }
      }
    }
    `);
};

const Projects = () => {
  const data = loadAllStudentWork();
  return data.allStudentWorkJson.nodes.map((node, index) => (
    <div className="imageSection" key={index}>
      <Images path={node.path} />
      <Description>
        <div
          className="fileName"
          style={{ fontStyle: 'italic' }}
        >
          {node.title}
        </div>
        <br />
        {node.description}
      </Description>
    </div>
  ));
};

export default Projects;
