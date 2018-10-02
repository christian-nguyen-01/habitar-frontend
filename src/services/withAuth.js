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
        this.props.history.replace('/')
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
          this.props.history.replace('/')
        }
      }
    }

    render() {
      if (this.state.userId) {
        return (
            <WrappedComponent history={this.props.history} userId={this.state.userId} />
        )
      }
      else {
        return null
      }
    }
  }
}
