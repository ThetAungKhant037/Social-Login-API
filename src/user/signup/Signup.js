import React, { Component } from 'react';
import './Signup.css';
import { Link, Redirect } from 'react-router-dom'
import { signup } from '../../service/OnlineService';
import fbLogo from '../../img/fb-logo.png';
import googleLogo from '../../img/google-logo.png';
import Alert from 'react-s-alert';

export const API_BASE_URL = 'http://localhost:8080';
export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect';
export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;


class Signup extends Component {
    render() {
        if(this.props.authenticated) {
            return <Redirect
                to={{
                pathname: "/",
                state: { from: this.props.location }
            }}/>;            
        }

        return (
            <div className="signup-container">
                <div className="signup-content">
                    <h1 className="signup-title">Signup with Online Product</h1>
                    <SocialSignup />
                    {/* OR Seperator between Social SignUp and Local SignUp Form */}
                    <div className="or-separator">
                        <span className="or-text">OR</span>
                    </div>
                    <SignupForm {...this.props} />
                    <span className="login-link">Already have an account? <Link to="/login">Login!</Link></span>
                </div>
            </div>
        );
    }
}

//Social SignUp form 
class SocialSignup extends Component {
    render() {
        return (
            <div className="social-signup">
                <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                    <img src={googleLogo} alt="Google" /> Sign up with Google</a>
                <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
                    <img src={fbLogo} alt="Facebook" /> Sign up with Facebook</a>
            </div>
        );
    }
}

//Local SignUp Form
//Local SignUp Form
class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            password: '',
            userNameError: '',
            passwordError: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateUsername(username) {
        if (username.length < 4 || username.length > 20) {
            return 'Username must be between 4 and 20 characters.';
        }
        return '';
    }

    validatePassword(password) {
        if (password.length < 4 || password.length > 8) {
            return 'Password must be between 4 and 8 characters.';
        }
        return '';
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        // Validate username
        if (inputName === 'userName') {
            const userNameError = this.validateUsername(inputValue);
            this.setState({
                [inputName]: inputValue,
                userNameError: userNameError
            });
        }
        // Validate password
        else if (inputName === 'password') {
            const passwordError = this.validatePassword(inputValue);
            this.setState({
                [inputName]: inputValue,
                passwordError: passwordError
            });
        } else {
            this.setState({
                [inputName]: inputValue
            });
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        // Check if there are validation errors
        if (this.state.userNameError || this.state.passwordError) {
            // You can display an error message or handle the validation as needed
            console.error("Invalid input. Please fix the errors.");
            return;
        }

        const signUpRequest = Object.assign({}, this.state);

        signup(signUpRequest)
            .then(response => {
                Alert.success("You're successfully registered. Please login to continue!");
                this.props.history.push("/login");
            })
            .catch(error => {
                Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-item">
                    <input
                        type="text"
                        name="userName"
                        className={`form-control ${this.state.userNameError ? 'error' : ''}`}
                        placeholder="Name"
                        value={this.state.userName}
                        onChange={this.handleInputChange}
                        required
                    />
                    {this.state.userNameError && (
                        <div className="error-message">{this.state.userNameError}</div>
                    )}
                </div>
                <div className="form-item">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div className="form-item">
                    <input
                        type="password"
                        name="password"
                        className={`form-control ${this.state.passwordError ? 'error' : ''}`}
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required
                    />
                    {this.state.passwordError && (
                        <div className="error-message">{this.state.passwordError}</div>
                    )}
                </div>
                <div className="form-item">
                    <button type="submit" className="btn btn-block btn-primary">
                        Sign Up
                    </button>
                </div>
            </form>
        );
    }
}





export default Signup