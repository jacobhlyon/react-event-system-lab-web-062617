// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {

	focusHandler = (event) => {
		console.log('Good!')
	}

	blurHandler = (event) => {
		console.log('Hey! Eyes on me!')
	}

	render() {
		return(
			<button onBlur={this.blurHandler} onFocus={this.focusHandler}/>
		)
	}

}

export default EyesOnMe