import {Component} from 'react' // Import React and Component from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isLightMode: false,
  }

  onLightMode = () => {
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))
  }

  getButtonText = () => {
    const {isLightMode} = this.state // Destructure isLightMode from the state

    return isLightMode ? 'Dark Mode' : 'Light Mode'
  }

  getBackgroundColor = () => {
    const {isLightMode} = this.state // Destructure isLightMode from the state

    return isLightMode ? 'DarkMode' : 'LightMode'
  }

  render() {
    const buttonText = this.getButtonText() // Call getButtonText as a method

    const backgroundColor = this.getBackgroundColor() // Call getBackgroundColor as a method

    return (
      <div className={backgroundColor}>
        <h1 className={backgroundColor}>Click To Change Mode</h1>
        <button onClick={this.onLightMode}>{buttonText}</button>
      </div>
    )
  }
}

export default LightDarkMode
