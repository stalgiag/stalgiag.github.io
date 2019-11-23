import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Images from './image';
import Description from './description';
import Video from './video';

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
  return data.allStudentWorkJson.nodes.map((node, index) => {
    let mediaElement = (<div />);
    if (JSON.parse(node.isVideo)) {
      mediaElement = (
        <Video
          videoSrcURL={node.path}
          videoTitle={node.title}
        />
      );
    } else {
      mediaElement = <Images path={node.path} />;
    }
    return (
      <div className="imageSection" key={index}>
        {mediaElement}
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
    );
  });
};

export default Projects;
