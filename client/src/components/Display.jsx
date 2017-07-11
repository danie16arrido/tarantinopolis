import React from 'react';
import MovieSelect from './MovieSelect.jsx';
import {MovieDetails} from './MovieDetails.jsx';

class Display extends React.Component {

  render() {
    return(
      <div>
        <MovieSelect />
        <MovieDetails show_title="Reservoir Dogs"/>
      </div>
    )
  }
}

export default Display;