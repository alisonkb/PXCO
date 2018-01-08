import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Typed from 'typed.js';


class SessionForm extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      typeUsername: null,
      typePassword: null,
      typeSubmit: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
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

  demo (e) {
    this.setState({username: '', password: ''});
    const guest = { username: 'demo-user', password: 'password' };
    const username = {
    strings: [guest.username],
    typeSpeed: 100
    };
    const password = {
      strings: [guest.password],
      typeSpeed: 100
    };

    this.setState({
      typeUsername: setTimeout(() => {
        new Typed('.login-input-u', username);
      }, 50),
      typePassword: setTimeout(() => {
        new Typed('.login-input-p', password);
      }, 800),
      typeSubmit: setTimeout(() => {
        if (this.props.formType === 'Log in') {
        this.props.processForm(guest) ;
      } else {
          this.props.login(guest) ;
        }
      }, 1700)
    });

  }


  render() {

    return (
      <div className='login-form-big'>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <section className='login-logo-image'>
        <img className='login-logo-image' src ="https://s3.amazonaws.com/pxco-dev/posts/pictures/000/000/018/original/sheepie.png"/>
      </section>
          <h1> {this.props.formType} to share and discover images. </h1>


          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>
              <input type="text"
                placeholder='Username'
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input-u"
              />
            </label>
            <br/>
            <label>
              <input type="password"
                placeholder='Password'
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input-p"
              />
            </label>
            <br/>
            <div className='submit-button'>
              <input className='submit' type="submit" value="Submit" />
            </div>
          </div>
        </form>
        <br/>
        <button type='button' onClick={this.demo} className='demo-button'>Demo LogIn</button>

      </div>


    );
  }



}

export default withRouter(SessionForm);
