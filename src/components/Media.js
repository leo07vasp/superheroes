import React from 'react';

const Media = ({ media, index }) => (
  <li key={index}>
    <p>{media.data.attributes.canonicalTitle}</p>
    <span>
      <img src={media.data.attributes.posterImage.small} alt="" />
    </span>
    <p>Tipo: {media.data.type}</p>
    <p>Classificação media: {media.data.attributes.averageRating}</p>
    <p>Status: {media.data.attributes.status}</p>
  </li>
);

export default Media;
