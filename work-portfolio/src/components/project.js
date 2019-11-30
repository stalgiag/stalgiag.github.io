import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Images from './image';
import Description from './description';
import Video from './video';

const workQuery = (graphql`
  query WorkQuery{
    allStudentWorkJson {
      nodes {
            path
            title
            artist
            description
            medium
            isVideo
        }
    }
    allUcsdJson {
      nodes {
            path
            title
            artist
            description
            medium
            isVideo
        }
    }
  }
`);

function loadAllWork(typeOfWork) {
  const data = useStaticQuery(workQuery);
  switch (typeOfWork) {
    case 'student':
      return data.allStudentWorkJson;
    case 'ucsd':
      return data.allUcsdJson;
    default:
      console.error('Projects requested without type of work.');
      return undefined;
  }
}


const Projects = ({ workType }) => {
  const data = loadAllWork(workType);
  return data.nodes.map((node, index) => {
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
    const artistName = workType === 'student' ? (
      <>
        by:
        {' '}
        {node.artist}
      </>
    ) : null;

    return (
      <div className="imageSection" key={index}>
        <div className="medium">{node.medium}</div>
        {mediaElement}
        <Description>
          <div
            className="fileName"
            style={{ fontStyle: 'italic' }}
          >
            {node.title}
            <br />
            {artistName}
          </div>
          <br />
          {node.description}
        </Description>
      </div>
    );
  });
};

Projects.propTypes = {
  workType: PropTypes.string.isRequired,
};

export default Projects;
