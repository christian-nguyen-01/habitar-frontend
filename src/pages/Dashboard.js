import React, {Component} from 'react'
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
        console.log(id);
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
        console.log(this.state.user)
        let { habits, user, username } = this.state
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
            </div>

        )
    }
}
export default withAuth(Dashboard)
