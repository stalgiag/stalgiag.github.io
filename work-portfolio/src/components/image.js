import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Video from './video'

// eslint-disable-next-line no-unused-vars
function objectToKeyArray(obj) {
  return Object.keys(obj);
}

function getLastStringInPath(path) {
  return path.split('/').pop();
}

// function getImage(path) {
//   const relPath = `images/${path}`;
//   console.log(relPath);
//   return useStaticQuery(graphql`
//   query ($relPath: String!){
//     fileName: file(relativePath: { eq: $relPath }) {
//       childImageSharp {
//         fluid(quality: 100) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }`);
// }

// Useful for when I want to load all of the images in a folder
const getAllImages = function () {
  return useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            fluid (quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
`);
};


const Images = ({ ...props }) => {
  const data = getAllImages();
  const image = data.allImageSharp.edges.find((el) => getLastStringInPath(el.node.fluid.src) === props.path);
  if (image) {
    return (
      <Img fluid={image.node.fluid} />
    );
  }
  return null;
};

export default Images;
