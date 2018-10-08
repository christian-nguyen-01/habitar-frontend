import React, {Component} from 'react'
import {deleteHabit} from '../services/Api'
class HabitCard extends Component{
delete = (e)=>{
    e.preventDefault()
    console.log(this.props.habit)
    deleteHabit(this.props.habit.user_id,this.props.habit.id)
    window.location.reload()

}
  render() {

    let { habit } = this.props
    let { habit_name, child, streak_count, completed, reminder_time } = habit
    let timebounds = /T(.*):00.000Z/ //regex to strip out the date and seconds
    let time = reminder_time.match(timebounds)[1] // time is now in simpler format ex: "08:30"
    let timeSplit = time.split(":")

    timeSplit[0] >= 12 ? time = `${timeSplit[0] - 12}:${timeSplit[1]} PM` : time = `${timeSplit[0]}:${timeSplit[1]} AM`
    return (
      <div>
        <p className="habitCard">{child} | {habit_name} | {time} | {completed?'✅':'ⓧ'} | <i className="fas fa-bolt"></i>{streak_count}</p>
        <a className = 'edit' href= {'/users/'+habit.user_id+'/habits/'+habit.id}>Edit</a>
        <p className = 'delete' onClick={this.delete}> Delete </p>
      </div>
    )
  }
}
export default HabitCard
