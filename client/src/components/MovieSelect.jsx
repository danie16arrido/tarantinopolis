import React from 'react';

class MovieSelect extends React.Component {
  render() {
    return( 
      <select required> 
        <option value="" selected> Select Movie</option> 
      </select> 
    )
  }
}

export default MovieSelect
