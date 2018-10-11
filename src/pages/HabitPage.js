import React, {Component} from 'react'
import withAuth from '../services/withAuth'
import {editHabit, getHabit} from '../services/Api'
import {Redirect} from 'react-router-dom'
// import egg from '../assets/egg.png'
import './HabitPage.css'

class HabitPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form:{
                habit: {
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
        let {user_id,id} = this.props.props.params
        if(habit.streak_count < 21) habit['streak_count'] += 1
        if(habit.streak_count >= 7) habit['completed'] = true
		if(habit.streak_count >= 21) habit['power_streak'] = true
		if(habit.completed) {
			this.dragonSound()
		} else {
			this.streakSound()
		}
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

        let {habit_name, child, streak_count, habitar, completed, habit_description, power_streak, power_reward} = this.state.form.habit

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
		let animateClass = completed? "animated tada slower delay-5s" : "animated wobble slower delay-5s"

        for(let i=1; i<=7; i++) {
            if(i <= streak_count % 7) streakCounter.push(<i style={{color:"gold"}} className="fas fa-bolt"></i>)
            else streakCounter.push(<i style={{color:'lightgrey'}} className="fas fa-bolt"></i>)
        }

		for(let i=1; i<=3; i++) {
			if(streak_count/7 >= i) powerStreakCounter.push(<i style={{color:"#4ddbff"}} className="fas fa-bolt"></i>)
			else powerStreakCounter.push(<i style={{color:'lightgrey'}} className="fas fa-bolt"></i>)
		}

        // let redirectPath='/users/'+user_id+'/habits/'+id+'/reward'

        return (
            <div className="HabitPage">
	            <h1> {child}&rsquo;s Habitar</h1>
	            <img className={animateClass} src={habitarImg} alt="Keep up your habit to hatch your habitar"></img>
	            <h1> {habit_name}</h1>
	            <p> {habit_description}</p>
	            {streakCounter}
				{rewardIcon}
	            <button onClick={this.addStreak}>click!</button>
				Power Streak: {powerStreakCounter}
				{powerRewardIcon}
            </div>
        )
    }
}
export default withAuth(HabitPage)
