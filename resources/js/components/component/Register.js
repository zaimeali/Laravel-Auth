import React, { Component } from 'react'

import { register } from './userFunctions'

export default class Register extends Component {

    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
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

        const newUser = {
            name: this.state.first_name + " " + this.state.last_name,
            email: this.state.email,
            password: this.state.password,
        }

        register(newUser).then(res => {
            this.props.history.push('/login');
        })
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form onSubmit={ this.onSubmit } noValidate>
                            <h1 className="h3 mb-3 font-weight-normal">
                                Register
                            </h1>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="first_name">
                                        First Name
                                    </label>
                                    <input 
                                        id="first_name" 
                                        type="text" 
                                        className="form-control" 
                                        name="first_name" 
                                        placeholder="Enter First Name"
                                        onChange={ this.onChange }
                                        value={ this.state.first_name }
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="last_name">
                                        Last Name
                                    </label>
                                    <input 
                                        id="last_name" 
                                        type="text" 
                                        className="form-control" 
                                        name="last_name" 
                                        placeholder="Enter Last Name"
                                        onChange={ this.onChange }
                                        value={ this.state.last_name }
                                    />
                                </div>
                            </div>
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
                            <button type="submit" className="btn btn-lg btn-primary btn-block">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
