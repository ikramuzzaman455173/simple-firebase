import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../public/Firebase/firebase.init';
const Login = () => {
  const [user, setUser] = useState('')
  const auth = getAuth(app)
  const googleProvider = new GoogleAuthProvider()
  const githubProvider=new GithubAuthProvider()
  const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user
        console.log(`user`, user);
        setUser(user)
      })
      .catch(error => {
      console.log(`error`,error.message);

    })
  }
  const loginWithFacebook = () => {

  }
  const loginWithGitHub = () => {
    signInWithPopup(auth,githubProvider)
      .then((result) => {
        const user = result.user
        console.log('user', user);
        setUser(user)
      }).catch(error => {
      console.log(`error`,error.message);
    })
  }

  const handleSignOut = () => {
    signOut(auth).then((result) => {
      // Sign-out successful.
      console.log(`result`, result);


    }).catch((error) => {
      // An error happened.
      console.log(`error`,error.message);

    });
  }
  return (
    <>
      <div className="login-form">
        <h1>Login</h1>
        <form>
          {/* <input type="text" value={user?user.displayName:''} placeholder="Username" /> */}
          {/* <input type="text" value={user.email&&null?'':user.email} placeholder="Useremail" /> */}
          {/* <input type="password" placeholder="Password" /> */}
          {user && <div>
            <h3 align="center">User Name:{user.displayName}</h3>
          <h3 align="center">User Email:{user.email}</h3></div>}
          <div className="btn">
            {user?
              <button type="submit" onClick={handleSignOut}>signOut</button>
              :<button type="submit">Login</button>
          }
          </div>
        </form>
        <div>
          <button className='google-btn' onClick={loginWithGoogle}>Login with Google</button>
          <button className='facebook-btn' onClick={loginWithFacebook}>Login with Facebook</button>
          <button className='github-btn' onClick={loginWithGitHub}>Login with GitHub</button>
        </div>
      </div>

    </>
  )
}

export default Login