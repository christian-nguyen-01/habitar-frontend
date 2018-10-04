import React, {Component} from 'react'
import import withAuth from '../services/withAuth'
import AuthService from '../services/AuthService'
import {getUser, getHabits} from '../services/Api'
import HabitCard from '../components/HabitCard'
import {Redirect} from 'react-router-dom'

class CreateHabit {
  constructor(props) {
    super(props)
    this.state={
      habit:{
        habit_name:"",
        child:"",
        streak_count:0,
        habitar:0,
        reward:"",
        completed:false,
        user_id:"",
        habit_description:"",
        reminder_time:""
      },
      success:false
    }
  }
  handleChange=(event)=>{
    let {habit}=this.state
    habit[event.target.name] = event.target.value
    this.setState({habit})
  }
  onSubmit=(event)=>{
    e.preventDefault()
    postHabit(this.state)
  }
  componentDidMount(){
    let auth=new AuthService()
    let user_id=auth.getUserId()
    console.log(user_id)
    this.setState({user_id:user_id})
  }
  render(){
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <input id="child" type="text" name="child" value={child} onChange={this.onChange} />
          <input id="habit_name" type="text" name="habit_name" value={habit_name} onChange={this.onChange} />
          <input id="habit_description" type="text" name="habit_description" value={habit_description} onChange={this.onChange} />
          <input id="reward" type="text" name="reward" value={reward} onChange={this.onChange} />
          <input id="habitar" type="text" name="habitar" value={habitar} onChange={this.onChange} />
          <input id="reminder_time" type="text" name="reminder_time" value={reminder_time} onChange={this.onChange} />
        </form>

        {this.props.success &&
          <Redirect to="/dashboard" />
        }
      </div>
    )
  }
}
export default withAuth(CreateHabit)
