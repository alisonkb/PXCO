import React from 'react';
import * as ApiUtil from '../../util/post_api_util';

class PostForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      caption: '',
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
    if (this.state.caption.legnth > 0) {
      formData.append("post[caption]", this.state.caption);
    }
    formData.append("post[picture]", file);


    ApiUtil.createPost(formData).then(() => this.props.history.push('/feed'));
  }



  render() {
    let image_render;
    if (this.state.imageUrl) {
      image_render = <img className="upload-preview" src={this.state.imageUrl || null}/>;
    } else {
      image_render = <div className="upload-preview"></div>;
    }

    return (
      <div>
        <form className="upload-form" onSubmit={this.handleSubmit}>
          <label className='upload-title'>Upload an image</label><br/>

        <input className="upload-image" id='upload-image' type="file" onChange={this.updateFile}/><br/>
      <label className='Custom-button' htmlFor='upload-image'>Choose a file</label>

    {image_render}<br/>
      <div className='caption-spacing'>
          <input className="upload-caption" placeholder='Caption' type="text" onChange={this.updateCaption}/><br/>
      </div>
      <button className="upload-button" onClick={this.handleSubmit}>Upload</button>

        </form>

      </div>

    );
  }

}

export default PostForm;
