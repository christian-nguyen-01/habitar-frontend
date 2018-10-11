import React, {Component} from 'react'
import withAuth from '../services/withAuth'
import {getHabit} from '../services/Api'
// import habitar0 from '../assets/habitar0.jpg'


class RewardPage extends Component {
    constructor(props) {
      super(props)
      this.state = {
        form: {
          habit: {
            user_id: this.props.userId,
            habit_name: "",
            child: "",
            habitar: 1,
            reward: "",
			power_reward: ""
          }
        },
        success: false
      }
    }
    componentDidMount(){
      let {user_id, id} = this.props.props.params
      console.log(user_id,id);
      getHabit(user_id,id)
      .then((res)=>{
          let {habit}=this.state.form
          console.log(habit,res);
          Object.keys(habit).map((e)=>habit[e]=res[e])

          // console.log(child);
          this.setState({habit})
          // this.setState({form.habit.child: child} )
          console.log(this.state.form.habit);
      })
    }
    render(){
        let {habit_name, child, habitar, reward, power_reward} = this.state.form.habit
        let habitarimg = '/habitar'+ habitar + '.jpg'
        console.log(habitarimg);
        return(
            <div className="RewardPage">
                <h1> {child} hatched their habit!</h1>
                <h1> {habit_name}</h1>
                <img src={habitarimg} alt = "habitar"></img>
                <h1>You get {reward}!</h1>
            </div>
        )
    }
}
export default withAuth(RewardPage)
