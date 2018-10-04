import React, {Component} from 'react'

class HabitCard extends Component{

  render() {

    let { habit } = this.props
    let { habit_name, child, streak_count, completed, reminder_time } = habit
    let timebounds = /T(.*):00.000Z/ //regex to strip out the date and seconds
    let time = reminder_time.match(timebounds)[1] // time is now in simpler format ex: "08:30"
    let timeSplit = time.split(":")

    timeSplit[0] >= 12 ? time = `${timeSplit[0] - 12}:${timeSplit[1]} PM` : time = `${timeSplit[0]}:${timeSplit[1]} AM`

    return (
      <div>
        <p>{child} | {habit_name} | {time} | {completed?'✅':'ⓧ'} | <i class="fas fa-bolt"></i>{streak_count}</p>
      </div>
    )
  }
}
export default HabitCard
