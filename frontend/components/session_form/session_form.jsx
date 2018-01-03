import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    return (
      <div className='login-form-big'>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <section className='login-logo-image'></section>
        <img src ="https://assets.vsco.co/assets/images/favicon-152.png"/>
          <h1> {this.props.formType} to share and discover images. </h1>


          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>
              <input type="text"
                placeholder='Username'
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>
              <input type="password"
                placeholder='Password'
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <div className='submit-button'>
              <input className='submit' type="submit" value="Submit" />
            </div>
          </div>
        </form>

      </div>


    );
  }



}

export default withRouter(SessionForm);
