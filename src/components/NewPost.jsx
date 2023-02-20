
import classes from './NewPost.module.css';

// Uses props React feature as an argument to handle the @onChange event
function NewPost(props) {

    return (
      <form className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          {/* Set up an event listener with onChange instead using addEventListener as usual JS */}
          {/* The onChange listen to fucntion events */}
          {/* onBodyChange is a custom name for the props object - the name can be anything */}
          <textarea id="body" required rows={3} onChange={props.onBodyChange} /> 
        </p>
        {/* Test output */}
        {/* <p>{enterBody}</p> */}
        <p>
          <label htmlFor="name">Your name</label>
          {/* onAuthorChange sets another costum event */}
          <input type="text" id="name" required onChange={props.onAuthorChange} />
        </p>
      </form>
    );
  }
  
  export default NewPost;