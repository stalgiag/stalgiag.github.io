import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Description from './description';

// eslint-disable-next-line no-unused-vars
function objectToKeyArray(obj) {
  return Object.keys(obj);
}

function getLastStringInPath(path) {
  return path.split('/').pop();
}

const Images = () => {
  const data = useStaticQuery(graphql`
  query {
    allImageSharp {
      edges {
        node {
          id
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`);

  return data.allImageSharp.edges.map((edge) => (
    <div className="imageSection">
      <Img
        fluid={edge.node.fluid}
      />
      <Description>
        <div
          className="fileName"
          style={{ fontStyle: 'italic' }}
        >
          {getLastStringInPath(edge.node.fluid.src)}
        </div>
        <br />
       Irure voluptate veniam amet reprehenderit aliquip aliquip
       minim do esse aliquip ex id cupidatat consequat.
       Consequat et ipsum in ad anim laboris velit. Et laboris culpa
       officia eiusmod occaecat labore cupidatat consequat ipsum pariatur.
       Dolore do esse nostrud deserunt nostrud do deserunt. Excepteur quis aute
       aliquip esse do aliqua quis consequat. Aliquip excepteur eu incididunt ullamco
       consectetur ut duis. Excepteur dolore Lorem ullamco in do in consectetur laboris.
      </Description>
    </div>
  ));
};

export default Images;
