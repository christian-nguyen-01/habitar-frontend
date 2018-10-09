import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import withAuth from '../services/withAuth'
import AuthService from '../services/AuthService'
import {getUser, getHabits} from '../services/Api'
import HabitCard from '../components/HabitCard'

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state={
            user:[],
            username:"",
            habits: []
        }
    }
    componentDidMount(){

        let auth = new AuthService()
        let id = auth.getUserId()

        getUser(id)
        .then(user=>{
            let username=user.email.split('@')[0]
            console.log(username)
            this.setState({
                user: user,
                username:username
            })
        })
        .then((res)=>getHabits(id))
        .then(habits=>{
          console.log(habits)
          this.setState({
            habits:habits
          })
        })

    }


    render() {
        let auth = new AuthService()
        let id = auth.getUserId()
        let { habits, username } = this.state
        return(
            <div>
                Hello { username }
                <div>
                  {habits.map(habit =>{
                    return(
                      <HabitCard habit={habit} key={habit.id} />
                    )
                  })}
                </div>
                <div>
                  <Link to= {`/users/${id}/habits/`}>Create New Habit</Link>
                </div>
            </div>

        )
    }
}
export default withAuth(Dashboard)
