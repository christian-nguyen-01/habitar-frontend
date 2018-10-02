import React, { Component } from 'react';
import AuthService from '../services/AuthService'

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
            <div>
		        <div>
					<h1>Register</h1>
					<form onSubmit={this.onSubmit}>

						<label id="email">Email</label>
						<input className="form-item"
							type="email"
							name="email"
							value={email}
							onChange={this.onChange}
						/>
						{this.state.errors.email && <div>Error: Email  {this.state.errors.email[0]}</div>}

						<label id="password">Password</label>
						<input className="form-item"
							type="password"
							name="password"
							value={password}
							onChange={this.onChange}
						/>
						{this.state.errors.password && <div>Error: Password  {this.state.errors.password[0]}</div>}

						<button className="form-submit" id="submit" onSubmit={this.onSubmit}>Register</button>
					</form>
					{this.state.registerSuccess}
				</div>
	      </div>
        );
    }

    onChange = (e) => {
		let { form } = this.state

		form.user[e.target.name] = e.target.value

		this.setState({ form })
	}

	onSubmit = (e) => {
		e.preventDefault()

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
