import React, {Component} from 'react'
import withAuth from '../services/withAuth'
import {editHabit, getHabit} from '../services/Api'
import {Redirect} from 'react-router-dom'
import egg from '../assets/egg.jpg'
import './HabitPage.css'

class HabitPage extends Component {
    constructor(props){
        super(props)
        this.state={
            form:{
                habit: {
                  user_id: "",
                  habit_name: "",
                  child: "",
                  streak_count: "",
                  habitar: "",
                  reward: "",
                  completed: false,
                  habit_description: ""
                }
            }
        }
    }
    addStreak = (e) =>{
        e.preventDefault()
        let habit=this.state.form.habit
        let {user_id,id} = this.props.props.params
        if(habit.streak_count<7) habit['streak_count']+=1
        if(habit.streak_count>=7) habit['completed']=true
        this.setState({habit})
        editHabit(user_id,id,this.state.form)
    }
    componentDidMount(){
        let {user_id, id} = this.props.props.params
        console.log(user_id,id);
        getHabit(user_id,id)
        .then((res)=>{
            let {habit}=this.state.form
            console.log(res.child);
            Object.keys(habit).map((e)=>habit[e]=res[e])
            console.log(habit);
            // console.log(child);
            this.setState({habit})
            // this.setState({form.habit.child: child} )
            console.log(this.state.form.habit);
        })
    }
    render(){
        let {habit_name, child, streak_count, completed, habit_description} = this.state.form.habit
        let {user_id, id} = this.props.props.params
        let streakCounter=[]
        for(let i=1;i<=7;i++){
            if(i<=streak_count) streakCounter.push(<i style={{color:"gold"}} className="fas fa-bolt"></i>)
            else streakCounter.push(<i style={{color:'lightgrey'}} className="fas fa-bolt"></i>)
        }
        let redirectPath='/users/'+user_id+'/habits/'+id+'/reward'

        return(
            <div className="HabitPage">
            <h1> {child}&rsquo;s Habitar</h1>
            <img src={egg} alt="Keep up your habit to hatch your habitar"></img>
            <h1> {habit_name}</h1>
            <p> {habit_description}</p>
            {streakCounter}
            <button onClick={this.addStreak}>click!</button>
            {completed && <Redirect to={redirectPath}/>}
            </div>
        )
    }
}
export default withAuth(HabitPage)
