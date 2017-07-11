import React from 'react';

export const MovieDetails = (props) => {
  if(!props) return null;

  return(
    <p>{props.show_title}</p>
  )
}