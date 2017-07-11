import React from 'react';
import { Display } from '../components/Display.jsx';

class Container extends React.Component {
  constructor( props ) {
    super( props )
    this.state={
      movies: [],
      focusMovie: null
    }
  }

  componentDidMount() {
    const url = "http://netflixroulette.net/api/api.php?director=Quentin%20Tarantino"
    const request = new XMLHttpRequest();
    request.open( "GET", url );
    request.onload = () => {
      if(request.status !== 200) return
      const jsonString = request.responseText;
      const data = JSON.parse( jsonString );
      
      this.setState( { movies: data } )
    }
    request.send();
  }

  render() {
    return (
      <Display movies={ this.state.movies } />
    )
  }

}


export default Container;