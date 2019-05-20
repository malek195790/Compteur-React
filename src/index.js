import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // timer: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isWorking: false
      };
      setInterval(() => {
        if (this.state.isWorking) {
          if (this.state.seconds < 59) {
            this.setState({
              seconds: this.state.seconds + 1
            });
          } else {
            this.setState({
              seconds: 0
            });
            if (this.state.minutes < 59) {
              this.setState({
                minutes: this.state.minutes + 1
              });
            } else {
              this.setState({
                minutes: 0,
                hours: this.state.hours + 1
              });
            }
          }
        }
      }, 1000);
    }
  
    start = () => {
      this.setState({
        isWorking: !this.state.isWorking
      });
    };
    reset = () => {
      this.setState({
        // timer: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      });
    };
  
    render() {
      return (
        <div className="App">
            <div className="main-box">
                <div className="watch">
                    <div className="unit">
                        <h1>{String(this.state.hours).padStart(2, "0")} : </h1>
                        <p className="padd">Hour</p>
                    </div>
                    <div className="unit">
                        <h1>{String(this.state.minutes).padStart(2, "0")} : </h1>
                        <p className="padd">Minute</p>
                    </div>
                    <div className="unit">
                        <h1>{String(this.state.seconds).padStart(2, "0")}</h1>
                        <p>Second</p>
                    </div>
                </div>
                <div className="button-display">
                    <button className="start-button" onClick={this.start}>
                    {this.state.isWorking ? "Pause" : "Start"}
                    </button>
                    <button className="reset-button" onClick={this.reset}>Reset</button>
                </div>
            </div>
        </div>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
