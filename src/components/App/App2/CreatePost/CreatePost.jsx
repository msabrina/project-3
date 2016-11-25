import React from 'react';
import DropZone from 'react-dropzone';
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

<<<<<<< HEAD
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
      <div className="create-Post">
=======
      <div className={styles["create-post"]}>
>>>>>>> master
        <h1>Create Post:</h1>
        <p>Title:</p>
        <input type="text" value={this.state.title} />
        <p>Images:</p>
        <DropZone
          multiple={false}
          accept="image/*"
          onDrop={this.onImageDrop.bind(this)}>
        </DropZone>
        <p>Description:</p>
        <input type="text" value={this.state.description} />
      </div>
    );
  }
}
export default CreatePost;
