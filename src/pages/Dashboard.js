import React, {Component} from 'react'
import withAuth from '../services/withAuth'
import AuthService from '../services/AuthService'
import {getUser, getHabits} from '../services/Api'
import HabitCard from '../components/HabitCard'
import {Bg, A2} from '../theme/types'
import '../css/Dashboard.css'
import '../css/Forms.css'

class Dashboard extends Component{

    constructor(props){
        super(props)
        this.state = {
            user:[],
            username:"",
            habits: []
        }
    }

    componentDidMount(){

        let auth = new AuthService()
        let id = auth.getUserId()

        getUser(id)
        .then(user => {
            let username=user.email.split('@')[0]
            console.log(username)
            this.setState({
                user: user,
                username:username
            })
        })
        .then((res) => getHabits(id))
        .then(habits => {
          console.log(habits)
          this.setState({
            habits: habits
          })
        })

    }

    render() {

        let auth = new AuthService()
        let id = auth.getUserId()
        let { habits, username } = this.state

        return(
            <Bg>
                <h1 className="dashboard-header">Hello { username.toUpperCase() }!</h1>
                <div className="form-container">
                  {habits.map(habit => {
                    return(
                      <HabitCard habit={habit} key={habit.id} />
                    )
                  })}
                </div>
                <div className="create-new">
                  <a href={`/users/${id}/habits/`}>CREATE NEW HABIT</a>
                </div>
            </Bg>
        )
    }
}

export default withAuth(Dashboard)
