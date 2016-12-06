console.log( 'I am am frontend! Yay, feel my POWAAH' )

// const React = require( 'react' )
import React from 'react'

// import '../styles.scss'

// const ReactDOM = require( 'react-dom' )
import ReactDOM from 'react-dom'

class App extends React.component {
	render(  ) {
		return(
			<p>Hellooo</p>
		 )
	}
}

ReactDOM.render( <App />, findElementById( 'containter' ) )