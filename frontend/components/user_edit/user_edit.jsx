import merge from 'lodash/merge';
import React from 'react';

class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.currentUser.id,
      username: this.props.currentUser.username,
      description: this.props.currentUser.description,
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


    formData.append("user[image]", file || this.props.currentUser.image_url);
    formData.append("user[username]", this.state.username);
    formData.append("user[description]", this.state.description );

    // const userNew = merge({}, this.props.currentUser, formData);


    this.props.updateUser(formData, this.state.id).then(() => this.props.history.push(`/users/${this.state.id}`));

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
    const badLink = <div className='wrong'>
      <section className='login-logo-image'>
        <img className='login-logo-image' src ="https://s3.amazonaws.com/pxco-dev/posts/pictures/000/000/018/original/sheepie.png"/>
    </section>
    <label>Nothing to see here.</label>
    </div>;

  if (this.props.user && this.props.currentUser) {
      if (this.props.user.id === this.props.currentUser.id) {
      return (

      <div className='profile-update-form'>
        <form onSubmit={ this.handleSubmit }>

        <input
          className='update-text-input'
            value={ this.state.username }
            placeholder="Username"
            onChange={ this.update('username')}
          />

        <div className='edit-avatar'>
          <img className="og-avatar"src={this.props.currentUser.image_url} />
          <img className="new-avatar" src={this.state.imageUrl || null}/>
          <input className="upload-image" id='upload-avatar' type="file" onChange={this.updateFile}/>
        <label className='Custom-button' htmlFor='upload-avatar'>Choose a Profile Picture</label>
          </div>


          <input
              value={ this.state.description || "" }
              placeholder="Give a Bio"
              onChange={ this.update('description')}
              className='update-text-input'
            />

          <button className="edit-button" onClick={this.handleSubmit}>Submit</button>


        </form>
      </div>
    );
    } else {
      return badLink;
    }
  } else {
    return badLink;


  }

  }



}

export default UserEdit;
