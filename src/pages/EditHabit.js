import React, {Component} from 'react'
import withAuth from '../services/withAuth'
// import AuthService from '../services/AuthService'
import {editHabit, getHabit} from '../services/Api'
// import HabitCard from '../components/HabitCard'
import {Redirect} from 'react-router-dom'

class CreateHabit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        habit: {
          user_id: this.props.userId,
          habit_name: "",
          child: "",
          streak_count: 0,
          habitar: 0,
          reward: "",
          completed: false,
          habit_description: "",
          opt_in: false,
          phone: 0,
          reminder_time: "12:00"
        }
      },
      success: false
    }
  }

  handleChange=(event)=>{
    let {habit} = this.state.form
    habit[event.target.name] = event.target.value
    this.setState({habit})
  }

  handleCheck=(e)=>{
    let {habit} = this.state.form
    habit['opt_in'] = e.target.checked?true:false
    console.log(e.target.checked);
    this.setState({habit})
  }

  onSubmit=(event)=>{
    let {user_id, id} = this.props.props.params
    console.log(this.state.form);
    event.preventDefault()
    editHabit(user_id, id, this.state.form)
    .then(() => {
      this.setState({
        success: true
      })
      console.log(this.state.success);
    })

  }

  componentDidMount(){
    let {user_id, id} = this.props.props.params
    console.log(user_id,id);
    getHabit(user_id,id)
    .then((res)=>{
        let {habit}=this.state.form
        Object.keys(habit).map((e)=>habit[e]=res[e])
        var displaytime = new Date(habit.reminder_time)
        console.log(habit.reminder_time,displaytime,displaytime.getHours(),displaytime.getMinutes());
        let settime= `${(displaytime.getHours()>=10)?displaytime.getHours():("0"+displaytime.getHours())}:${(displaytime.getMinutes()>=10)?displaytime.getMinutes():("0"+displaytime.getMinutes())}`
        console.log(settime);
        habit['reminder_time']=settime
        // console.log(child);
        this.setState({habit})
        // this.setState({form.habit.child: child} )
        console.log(this.state.form.habit);
    })
  }

  render(){
    let { habit_name, child, habitar, reward, habit_description, reminder_time, opt_in, phone } = this.state.form.habit
    let opt= opt_in? <input id="opt_in" type="checkbox" name="opt_in" value={opt_in}
    onClick={this.handleCheck} checked/>:<input id="opt_in" type="checkbox" name="opt_in" value={opt_in}
    onClick={this.handleCheck} />
    return(

      <div>
        <form onSubmit={this.onSubmit} className="createForm">
          <input id="child" type="text" name="child" value={child} placeholder="Child" onChange={this.handleChange} />
          <input id="habit_name" type="text" name="habit_name" placeholder="Habit" value={habit_name} onChange={this.handleChange} />
          <input id="habit_description" type="text" name="habit_description" placeholder="Habit Description" value={habit_description} onChange={this.handleChange} />
          <input id="reward" type="text" name="reward" value={reward} placeholder="Reward" onChange={this.handleChange} />

          <select
          id="habitar"
          name="habitar"
          value={habitar}
          onChange={this.handleChange}
          >
          <option value="1">Habitar 1</option>
          <option value="2">Habitar 2</option>
          <option value="3">Habitar 3</option>
          <option value="4">Habitar 4</option>
          <option value="5">Habitar 5</option>
          </select>

          {opt}
          <input id="phone" type="tel" name="phone" value={phone} onChange={this.handleChange} />
          <input id="reminder_time" type="time" name="reminder_time" value={reminder_time} onChange={this.handleChange} />

          <button type="submit" onClick={this.onSumbit}>Edit Habit</button>

        </form>

        {this.state.success &&
          <Redirect to="/dashboard" />
        }

      </div>
    )
  }
}
export default withAuth(CreateHabit)
