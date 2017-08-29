// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

	showPassword = (event) => {
		// event.preventDefault()
		console.log('Entering password...')
	}

	render() {
		return(
			<input onKeyUp={this.showPassword} type="password" />
		)
	}

}

export default Keypad