import React, {Component} from 'react'
import withAuth from '../services/withAuth'
import AuthService from '../services/AuthService'
import {postHabit} from '../services/Api'
import {Redirect} from 'react-router-dom'
import '../css/Forms.css'

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
          habitar: 1,
          reward: "",
          completed: false,
          habit_description: "",
          opt_in: false,
          phone: "",
          reminder_time: "12:00",
		  power_streak: false,
		  power_reward: ""
        }
      },
      success: false
    }
  }

  handleChange = (event) => {
    let {habit} = this.state.form
    habit[event.target.name] = event.target.value
    this.setState({habit})
  }

  handleCheck = (e) => {
    let {habit} = this.state.form
    habit['opt_in'] = e.target.checked
    this.setState({habit})
  }

  onSubmit = (event) => {
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

    let { habit_name, child, habitar, reward, habit_description, reminder_time, opt_in, phone, power_streak, power_reward } = this.state.form.habit

    return(
      // TODO: replace classnames with styled components
      <div className="center">
      <h1>Create a new Habit</h1>
        <div className="card">
          <form onSubmit={this.onSubmit} className="createForm">

          <label>Habit:</label>
          <input
          className="form-item"
    			  id="child"
    			  type="text"
    			  name="child"
    			  value={child}
    			  placeholder="Child"
    			  onChange={this.handleChange}
    		    />

          <label>Habit:</label>
          <input
            className="form-item"
    			  id="habit_name"
    			  type="text" name="habit_name"
    			  placeholder="Habit"
    			  value={habit_name}
    			  onChange={this.handleChange}
  		      />

          <label>Describe the Habit</labl>
          <input
            className="form-item"
    			  id="habit_description"
    			  type="text"
    			  name="habit_description"
    			  placeholder="Habit Description"
    			  value={habit_description}
    			  onChange={this.handleChange}
    		    />

          <label>1 week reward:</label>
          <input
          className="form-item"
  			  id="reward"
  			  type="text"
  			  name="reward"
  			  placeholder="Reward for a 7 day streak"
  			  value={reward}
  			  onChange={this.handleChange}
  		    />

        <label>3 week reward:</label>
  		  <input
          className="form-item"
  			  id="power_reward"
  			  type="text"
  			  name="power_reward"
  			  placeholder="Reward for a 21 day streak"
  			  value={power_reward}
  			  onChange={this.handleChange}
  		    />

        <label>Choose your Habitar:</label>
        <input
          className="form-item"
  			  id="habitar"
  			  type="text"
  			  name="habitar"
  			  value={habitar}
  			  onChange={this.handleChange}
  		    />

        <label>Opt in for text messages</label>
        <input
          className="form-item"
		  	  id="opt_in"
  			  type="checkbox"
  			  name="opt_in"
  			  value={opt_in}
	        onClick={this.handleCheck}
		      />

        <label>Phone number:</label>
        <input
          className="form-item"
  			  id="phone"
  			  type="number"
  			  name="phone"
  			  value={phone}
  			  onChange={this.handleChange}
  		    />

        <label>When is the Habit performed?</label>
        <input
          className="form-item"
  			  id="reminder_time"
  			  type="time"
  			  name="reminder_time"
  			  value={reminder_time}
  			  onChange={this.handleChange}
  		    />

        <button type="submit" onClick={this.onSumbit}>Create Habit</button>
        </form>

        {this.state.success && <Redirect to="/dashboard" />}
      </div>
    )
  }
}

export default withAuth(CreateHabit)
