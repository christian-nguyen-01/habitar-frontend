import React, { Component } from 'react'

class Sound extends Component {

	constructor(props) {
		super(props)
		this.state = {
			playSound: false,
			jungleSound: new Audio("/sounds/jungle.wav")
		}
	}

	handleSound = () => {
		let { playSound, jungleSound } = this.state
		playSound? jungleSound.pause() : jungleSound.play()
		let noSound = !playSound
		this.setState({
			playSound: noSound,
		})
	}

	render() {

		let sound =
		this.state.playSound?
			<a href="#" onClick={this.handleSound}><i style={{color:"hotpink"}} class="fas fa-volume-up"></i></a>
		:
			<a href="#" onClick={this.handleSound}><i style={{color:"gold"}} class="fas fa-volume-off"></i></a>

		return(
			<div>
				{sound}
			</div>
		)
	}
}

export default Sound
