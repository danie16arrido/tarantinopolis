import React from 'react';

class MovieSelect extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      selectedIndex: undefined
    }
  }
  render() {
    const options = this.props.movies.map(( movie, index ) =>{
      return <option value={ index } key={ index }>{ movie.show_title }</option>
    })

    return( 
      <select required> 
        <option value="" selected> Select Movie</option> 
        { options }
      </select> 
    )
  }
}

export default MovieSelect
