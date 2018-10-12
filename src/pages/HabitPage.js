import React, {Component} from 'react'
import withAuth from '../services/withAuth'
import {editHabit, getHabit} from '../services/Api'
import {Redirect} from 'react-router-dom'
import {LeavesBg} from '../theme/types'
import '../css/HabitPage.css'
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes

class HabitPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form:{
                habit: {
                  id:"",
                  user_id: "",
                  habit_name: "",
                  child: "",
                  streak_count: "",
                  habitar: "",
                  reward: "",
                  completed: false,
                  habit_description: "",
				  power_streak: false,
				  power_reward: ""
                }
            }
        }
    }

	streakSound = () => {
		new Audio('/sounds/streak.wav').play()
	}

	dragonSound = () => {
		let {completed, habitar} = this.state.form.habit
		let habitarSound = '/sounds/sound' + habitar + '.wav'
		new Audio(habitarSound).play()
	}

    addStreak = (e) => {
        e.preventDefault()
        let habit = this.state.form.habit
        let {user_id,id} = habit
        if(habit.streak_count < 21) habit['streak_count'] += 1
        if(habit.streak_count >= 7) {
			habit['completed'] = true
		}
		if(habit.streak_count >= 21) habit['power_streak'] = true
		if(habit.completed) {
			this.dragonSound()
		} else {
			this.streakSound()
		}
        this.setState({habit})
        editHabit(user_id, id, this.state.form)
    }

    resetStreak = (e) =>{
      e.preventDefault()
      let habit= this.state.form.habit
      let {user_id,id} = this.props.props.params
      habit['streak_count'] = 0
      habit['completed'] = false
      habit['power_streak'] = false
      this.setState({habit})
      editHabit(user_id, id, this.state.form)
    }

    componentDidMount() {
        let {user_id, id} = this.props.props.params
        console.log(user_id, id);
        getHabit(user_id, id)
        .then((res) => {
            let {habit} = this.state.form
            console.log(res.child);
            Object.keys(habit).map((e) => habit[e]=res[e])
            console.log(habit);
            // console.log(child);
            this.setState({habit})
            // this.setState({form.habit.child: child} )
            console.log(this.state.form.habit);
        })
    }

    render() {

        let {habit_name, child, streak_count, habitar, reward, completed, habit_description, power_streak, power_reward} = this.state.form.habit

        let {user_id, id} = this.props.props.params
        let streakCounter = []
		let powerStreakCounter = []
		let locked = <i style={{color:'lightgrey'}} class="fas fa-lock"></i>
		let unlocked = <i style={{color:"gold"}} class="fas fa-lock-open"></i>
		let rewardIcon = completed? unlocked : locked
		let pLocked = <i style={{color:'lightgrey'}} class="fas fa-lock"></i>
		let pUnlocked = <i style={{color:"#4ddbff"}} class="fas fa-lock-open"></i>
		let powerRewardIcon = power_streak? pUnlocked : pLocked
		let habitarImg = completed? '/habitars/habitar' + habitar + '.png' : '/eggs/egg' + habitar + '.png'

        for(let i=1; i<=7; i++) {
            if(i <= streak_count % 7) streakCounter.push(<i style={{color:"gold"}} className="fas fa-bolt"></i>)
            else streakCounter.push(<i style={{color:'lightgrey'}} className="fas fa-bolt"></i>)
        }

		for(let i=1; i<=3; i++) {
			if(streak_count/7 >= i) powerStreakCounter.push(<i style={{color:"#4ddbff"}} className="fas fa-bolt"></i>)
			else powerStreakCounter.push(<i style={{color:'lightgrey'}} className="fas fa-bolt"></i>)
		}

		let rewardbox
		if(power_streak) rewardbox=
		<div className="reward-box">
			<h1 className="reward-text">Congratulations on completing a power streak!<br/>
			You&rsquo;ve earned your reward: {power_reward}!</h1>
		</div>
		else if(completed) rewardbox=
		<div className="reward-box">
			<h1 className="reward-text">Congratulations on completing a streak!<br/>
			You&rsquo;ve earned your reward: {reward}!<br/>
			{21-streak_count} more days before you earn your power reward!</h1>
		</div>
		else rewardbox =
		<div className="reward-box">
			<h1 className="reward-text">Keep working on your habit to complete a streak!<br/>
			{7-streak_count} more days before your Habitar hatches!</h1>
		</div>

        return (
            <LeavesBg>
	            <h1 className="habitar-header">{child}&rsquo;s Habitar</h1>

				{rewardbox}

				<div className="main-container">

					<div className="habit-info-container">
						<ul className="streakCount">
							<li>
								7 Day Streak:
								<div>{streakCounter} {rewardIcon}</div>
							</li>
							<li>
								Power Streak:
								<div>{powerStreakCounter} {powerRewardIcon}</div>
							</li>
						</ul>
					</div>

					<div className="button-container">
						<div className="streak-button" onClick={this.addStreak}>Completed Today?
						</div>
						<div className="reset-button" onClick={this.resetStreak}>Reset
						</div>
					</div>

					<div className="habit-info-container">
						<ul className="habitarInfo">
							<li className="habitKey">Habit:
								<span className="habitValue">{habit_name}</span>
							</li>

							<li className="habitKey">Description:
							<span className="habitValue">{habit_description}</span>
							</li>
						</ul>
					</div>

				</div>

				<div className="habitarImageContainer">
					<img className="habitarImage" src={habitarImg} alt="Keep up your habit to hatch your habitar"></img>
				</div>
            </LeavesBg>
        )
    }
}
export default withAuth(HabitPage)
