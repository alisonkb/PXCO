import merge from 'lodash/merge';
import React from 'react';

class PostEdit extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.state = {
      caption: ""
    };
  }


  componentDidMount() {
    let postId = parseInt(this.props.location.pathname.slice(7));
    this.props.fetchPost(postId);

  }

  update(caption) {
    return e => this.setState({
      [caption]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newPost = this.props.post;
    newPost.caption = this.state.caption;
    this.props.updatePost({ post : newPost }, this.props.post.id).then(() => this.props.history.push(`/posts/${this.props.post.id}`));
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

    if (this.props.post) {



    return (
      <form onSubmit={ this.handleSubmit }>
        <input value={ this.state.caption }
          placeholder="Caption"
          onChange={ this.update('caption')}
        />

      <img src={this.props.post.imageUrl}/>

    <button onClick={this.handleSubmit}>Submit</button>




      </form>
    );
  } else {
  return (
    <div></div>
  );
  }
  }









}

export default PostEdit;
