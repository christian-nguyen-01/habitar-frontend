import React, {Component} from 'react'
import {deleteHabit} from '../services/Api'
import '../css/HabitCard.css'

class HabitCard extends Component {

delete = (e)=>{
    e.preventDefault()
    console.log(this.props.habit)
    deleteHabit(this.props.habit.user_id,this.props.habit.id)
    window.location.reload()

}
  render() {

    let { habit } = this.props
    let { habit_name, child, streak_count, completed, reminder_time, power_streak } = habit
	let power_count = Math.floor(streak_count/7)
    let timebounds = /T(.*):00.000Z/ //regex to strip out the date and seconds
    let time = reminder_time.match(timebounds)[1] // time is now in simpler format ex: "08:30"
    let timeSplit = time.split(":")

    timeSplit[0] >= 12 ? time = `${timeSplit[0] - 12}:${timeSplit[1]} PM` : time = `${timeSplit[0]}:${timeSplit[1]} AM`
    return (
      <div className="habit-card">
        <a className="habit-info" href={'/users/'+habit.user_id+'/habits/'+habit.id}>
			<div className="habit-item">{child} | {habit_name} | {time} | {completed?'✅':'ⓧ'} | <i className="fas fa-bolt" id="streak"></i>{streak_count} | <i className="fas fa-bolt" id="power"></i>{power_count}
			</div>
		</a>

		<div className="edit-delete">
	        <a id='edit' href= {'/users/'+habit.user_id+'/habits/'+habit.id+'/edit'}>Edit</a> |
	        <a id='delete' href="#" onClick={this.delete}> Delete </a>
		</div>
      </div>
    )
  }
}
export default HabitCard
