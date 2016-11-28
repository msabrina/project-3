import React, { Component } from 'react';
import DropZone from 'react-dropzone';
import { Link } from 'react-router';
import styles from './CreatePost.css';


class CreatePost extends Component {
constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      formData: new FormData(),
    };
  }
// function to set the state of the input fields and send it back up to app

  onImageDrop (images) {
    this.setState({
      formData: this.state.formData.append('image', images[0]),
    });
  }

  postProduct(e) {
    e.preventDefault();
    const token = localStorage.getItem('userAuthToken');
    fetch('/api/v1/products', {
      headers: new Headers ({
        Token_Authorization: token,
      }),
      method: 'POST',
      body: this.state.formData,
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className={styles["create-post"]}>
        <h1>Create Post:</h1>
        <div className={styles['title-box']}>
          <p>Title:</p>
          <input type="text" value={this.state.title} />
        </div>
        <p>Images:</p>
        <DropZone
          multiple={false}
          accept="image/*"
          onDrop={this.onImageDrop.bind(this)}>
        </DropZone>
        <div className={styles['description-box']}>
          <p>Description:</p>
          <input type="text" value={this.state.description} />
        </div>
        <Link to="/profile"><button> Create Post </button></Link>
      </div>
    );
  }
}
export default CreatePost;
