// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {timeInSecs: 0}

  componentWillUnmount = () => {
    clearInterval(this.timerId)
  }

  renderTimeInMinutes = () => {
    const {timeInSecs} = this.state
    const minutes = Math.floor(timeInSecs / 60)
    console.log(minutes)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderTimeInSecs = () => {
    const {timeInSecs} = this.state
    const secs = Math.floor(timeInSecs % 60)
    if (secs < 10) {
      return `0${secs}`
    }
    return secs
  }

  onClickStart = () => {
    this.timerId = setInterval(this.changeTime, 1000)
  }

  changeTime = () => {
    this.setState(prevState => ({timeInSecs: prevState.timeInSecs + 1}))
  }

  onClickStop = () => {
    clearInterval(this.timerId)
  }

  onClickReset = () => {
    this.setState({timeInSecs: 0})
    clearInterval(this.timerId)
  }

  render = () => {
    const {timeInSecs} = this.state
    console.log(timeInSecs)
    const displayTime = `${this.renderTimeInMinutes()}:${this.renderTimeInSecs()}`

    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="img-and-name">
              <img
                className="image"
                width={20}
                height={20}
                alt="stopwatch"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
              />
              <p className="timer-para">Timer</p>
            </div>
            <h1>{displayTime}</h1>
            <div className="buttons-container">
              <button
                className="start-btn"
                type="button"
                onClick={this.onClickStart}
              >
                Start
              </button>
              <button
                className="stop-btn"
                type="button"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                className="reset-btn"
                type="button"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
