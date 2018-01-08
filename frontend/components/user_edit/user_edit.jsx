import merge from 'lodash/merge';
import React from 'react';

class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.currentUser.id,
      username: this.props.currentUser.username,
      description: this.props.currentUser.description,
      // original_avatar: this.props.currentUser.image_url,
      imageFile: null,
      imageUrl: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
      let userId = parseInt(this.props.location.pathname.slice(7));
      this.props.fetchUser(userId);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }




  handleSubmit(e) {
    e.preventDefault();

    // const userinfo = merge({}, this.props.currentUser, this.state);
    const file = this.state.imageFile;
    const formData = new FormData();


    formData.append("user[image]", file);
    formData.append("user[username]", this.state.username);
    formData.append("user[bio]", this.state.bio);


    this.props.updateUser(formData, this.state.id);

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

  render () {
    return(

    <div className='profile-update-form'>
      <form onSubmit={ this.handleSubmit }>
        <h2>Username</h2>
      <input
          value={ this.state.username }
          placeholder="Username"
          onChange={ this.update('username')}
        />

        <h2>Profile Picture</h2>
        <img className="profile-avatar"src={this.props.currentUser.image_url} />
      <input className="upload-avatar" type="file" onChange={this.updateFile}/>
      <img className="upload-preview" src={this.state.imageUrl || null}/>
        <h2>Bio</h2>
        <input
            value={ this.props.currentUser.description || "" }
            placeholder="Bio"
            onChange={ this.update('description')}
          />




  <button className="upload-button" onClick={this.handleSubmit}>Submit</button>


      </form>
    </div>
  );

  }



}

export default UserEdit;
