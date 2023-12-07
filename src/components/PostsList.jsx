import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';

import classes from './PostsList.module.css';

export default function PostsList() {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <Modal>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
        />
      </Modal>
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author='Idan' body='bla bla' />
      </ul>
    </>
  );
}
