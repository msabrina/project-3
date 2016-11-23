import React from 'react';
import './CreatePost.css';

const CreatePost = (props) => (

// function to set the state of the input fields and send it back up to app

      <div className="create-Post">
        <h1>Create Post:</h1>
        <p>Title:</p>
        <input type="text"/>
        <p>Images:</p>
        <input type="text"/>
        <p>Description:</p>
        <input type="text"/>
      </div>
    );


export default CreatePost;
