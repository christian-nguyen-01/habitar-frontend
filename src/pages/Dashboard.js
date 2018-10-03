import React, {Component} from 'react'
import withAuth from '../services/withAuth'
import AuthService from '../services/AuthService'
import {getUser} from '../services/Api'

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state={
            user:[]
        }
    }
    componentDidMount(){

        let auth = new AuthService()
        let id = auth.getUserId()

        getUser(id)
        .then(APIuser=>{
            this.setState({
                user: APIuser
            })
        })
    }

    render() {

        return(
            <div>
                This dashboard is protected for {this.state.user.email}
            </div>
        )
    }
}
export default withAuth(Dashboard)
