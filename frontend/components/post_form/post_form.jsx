import React from 'react';
import * as ApiUtil from '../../util/post_api_util';

class PostForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      caption: null,
      user_id: this.props.currentUser.id,
      imageFile: null,
      imageUrl: ""

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateCaption = this.updateCaption.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  updateCaption(e) {
    this.setState({
      caption: e.target.value
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

    const file = this.state.imageFile;
    const formData = new FormData();

    formData.append("post[caption]", this.state.caption);
    formData.append("post[picture]", file);


    ApiUtil.createPost(formData).then(() => this.props.history.push('/feed'));
  }

  goToProfile() {
    this.props.history.posh('/#/feed');
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.updateCaption}/>
          <input type="file" onChange={this.updateFile}/>
        <img src={this.state.imageUrl}/>
        <button onClick={this.handleSubmit}>Upload</button>
        </form>

      </div>

    );
  }

}

export default PostForm;
