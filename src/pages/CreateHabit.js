import React, {Component} from 'react'
import withAuth from '../services/withAuth'
import AuthService from '../services/AuthService'
import {postHabit} from '../services/Api'
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
          reminder_time: "2000-01-01T08:30:00.000Z"
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

  onSubmit=(event)=>{
    console.log(this.state.form);
    event.preventDefault()
    postHabit(this.state.form)
    .then(() => {
      this.setState({
        success: true
      })
      console.log(this.state.success);
    })

  }

  componentDidMount(){
    let auth=new AuthService()
    let user_id=auth.getUserId()
    console.log(user_id)
    console.log(this.props.props.user_id)
    // console.log(this.props.match.params);
    this.setState({user_id:user_id})
  }

  render(){

    let { habit_name, child, habitar, reward, habit_description, reminder_time } = this.state.form.habit

    return(

      <div>
        <form onSubmit={this.onSubmit} className="createForm">
          <input id="child" type="text" name="child" value={child} placeholder="Child" onChange={this.handleChange} />
          <input id="habit_name" type="text" name="habit_name" placeholder="Habit" value={habit_name} onChange={this.handleChange} />
          <input id="habit_description" type="text" name="habit_description" placeholder="Habit Description" value={habit_description} onChange={this.handleChange} />
          <input id="reward" type="text" name="reward" value={reward} placeholder="Reward" onChange={this.handleChange} />
          <input id="habitar" type="text" name="habitar" value={habitar} onChange={this.handleChange} />
          <input id="reminder_time" type="time" name="reminder_time" value={reminder_time} onChange={this.handleChange} />

          <button type="submit" onClick={this.onSumbit}>Create Habit</button>

        </form>

        {this.state.success &&
          <Redirect to="/dashboard" />
        }

      </div>
    )
  }
}
export default withAuth(CreateHabit)
