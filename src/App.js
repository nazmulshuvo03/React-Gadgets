import React, { Component } from 'react';
import Calendar from 'react-calendar'
import Clock from 'react-clock'

import './App.css';

class App extends Component {
  state = {
    date: new Date(),
    time: new Date()
  }

  onChange = date => {
    this.setState({ date })
    //date = date.toString()
    //alert('New date is: ' + date)
  }

  onClickDay = day => {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];
    alert(day.getDate() + ' of ' + months[day.getMonth()] + ' ' + (day.getYear()+1900).toString() + ' clicked')
    //console.log(day.getDate())
  }

  componentDidMount() {
    setInterval(
      () => this.setState({ time: new Date() }),
      1000
    );
  }

  render() {
    return (
      <div>
        <h1 className="center">Gadgets</h1>
        <div className='row'>
          <div className=" col s6">
            <Calendar 
              onChange={this.onChange}
              value={this.state.date} 
              onClickDay={this.onClickDay}
              view="month"
            />
          </div>
          <div className=" col s6">
            <Calendar 
              onChange={this.onChange}
              value={this.state.date} 
              onClickDay={this.onClickDay}
              view="year"
            />
          </div>
        </div>
        <div className="row">
          <div className=" col s6">
            <Clock 
              className="col center"
              value={this.state.time}
            />
          </div>
          <div className=" col s6">
            <Clock 
              className="col center"
              value={this.state.time}
              renderNumbers={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
