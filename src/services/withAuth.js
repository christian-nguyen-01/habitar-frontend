import React, { Component } from 'react'
import AuthService from './AuthService'


export default function withAuth(WrappedComponent) {
  const Auth = new AuthService()
  return class AuthWrapped extends Component {
    constructor(props) {
      super(props)
      this.state = {
        userId: null
      }
    }

    componentWillMount() {
      if (!Auth.loggedIn()) {
        this.props.history.replace('/login')
      }
      else {
        try {
          const userId = Auth.getUserId()
          this.setState({
            userId: userId
          })
        }
        catch(err){
          console.log(err);
          Auth.logout()
          this.props.history.replace('/login')
        }
      }
    }

    render() {
      console.log(this.props);
      if (this.state.userId) {
        return (
            <WrappedComponent history={this.props.history} userId={this.state.userId} props={this.props}/>
        )
      }
      else {
        return null
      }
    }
  }
}
