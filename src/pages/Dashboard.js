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
            habits: []
        }
    }
    componentDidMount(){
        let auth = new AuthService()
        let id = auth.getUserId()
        console.log(id);
        getUser(id)
        .then(APIuser=>{
            // console.log(APIuser)
            this.setState({
                user: APIuser
            })
        })
        getHabits(id)
        .then(habits=>{
          console.log(habits)
          this.setState({
            habits:habits
          })
        })
    }

    render() {

        console.log(this.state.user);
        let {habits}=this.state
        return(
            <div>
                This dashboard is protected for {this.state.user.email}
                <div>
                  {habits.map(habit =>{
                    return(
                      <HabitCard habit={habit} />
                    )
                  })}
                </div>
            </div>

        )
    }
}
export default withAuth(Dashboard)
