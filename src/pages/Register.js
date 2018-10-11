import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import AuthService from '../services/AuthService'
import { Bg } from '../theme/types'
import { Form, Card } from '../theme/forms'

class Register extends Component {

    constructor(props) {
		super(props)
		this.auth = new AuthService()
		this.state = {
			registerSuccess: false,
			errors: "",
			form: {
				user: {
					email: "",
					password: ""
				}
			}
		}
	}

    render() {

        let { email, password } = this.state.form.user

        return (
          <Bg>
            <h1>Register</h1>
		        <Card>
					<Form onSubmit={this.onSubmit} className="registerForm">

  						<label>Email</label>
  						<input className="form-item"
  							type="email"
  							name="email"
                			id="email"
  							value={email}
  							onChange={this.onChange}
  						/>
                {this.state.errors.email && <div>Error: Email  {this.state.errors.email[0]}</div>}

  						<label >Password</label>
  						<input className="form-item"
  							type="password"
  							name="password"
                            id="password"
  							value={password}
  							onChange={this.onChange}
  						/>
  						  {this.state.errors.password && <div>Error: Password  {this.state.errors.password[0]}</div>}

						   <button className="form-submit" id="submit" onSubmit={this.onSubmit}>Register</button>
					</Form>
					{this.state.registerSuccess && <Redirect to="/dashboard" />}
				</Card>
	      </Bg>
        );
    }

    onChange = (e) => {
		let { form } = this.state

		form.user[e.target.name] = e.target.value

		this.setState({ form })
	}

	onSubmit = (e) => {
		e.preventDefault()
        console.log(this.state.form);
		this.auth.register(this.state.form)
		.then(json => {
			console.log("handling any errors");
			if(json.errors) {
				this.setState({
					errors: json.errors
				})
			}
			return json
		})
		.then(json => {
			console.log("redirect");
            console.log(json);
			this.setState({
				registerSuccess: true
			})
		})
	}
}

export default Register;
