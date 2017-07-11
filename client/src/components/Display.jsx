import React from 'react';
import MovieSelect from './MovieSelect.jsx';
import {MovieDetails} from './MovieDetails.jsx';

// class Display extends React.Component {
//   constructor( props ) {
//     super( props )
    
//   }
  
//   render() {
//     console.log( "displayrender",this.props)
//     return(
//       <div>
//         <MovieSelect />
//         <MovieDetails movies={ this.props.movies }/>
//       </div>
//     )
//   }
// }

export const Display = (props) => {
  return (
      <div>
        <MovieSelect movies={ props.movies }/>
        <MovieDetails />
      </div>
  )
}

// export default Display;