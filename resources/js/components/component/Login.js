import React, { Component } from 'react'

import { login } from './userFunctions'

export default class Login extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password,
        }

        login(user).then(res => {
            if(res){
                this.props.history.push('/profile')
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form onSubmit={ this.onSubmit } noValidate>
                            <h1 className="h3 mb-3 font-weight-normal">
                                Please sign in
                            </h1>
                            <div className="form-group">
                                <label htmlFor="email">
                                    Email Address
                                </label>
                                <input 
                                    id="email" 
                                    type="email" 
                                    className="form-control" 
                                    name="email" 
                                    placeholder="Enter Email"
                                    onChange={ this.onChange }
                                    value={ this.state.email }
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input 
                                    id="password" 
                                    type="password" 
                                    className="form-control" 
                                    name="password" 
                                    placeholder="Enter Password"
                                    onChange={ this.onChange }
                                    value={ this.state.password }
                                />
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
