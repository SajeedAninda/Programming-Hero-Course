import './App.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "./firebaseConfig";
import { useState } from 'react';

const provider = new GoogleAuthProvider();
let auth = getAuth(app);

function App() {
  const [userDetails, setUserDetails] = useState(null);

  let handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUserDetails(user); 
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <button onClick={handleSignInWithGoogle}>Sign In With Google</button>
      {userDetails && (
        <div>
          <h1>User: {userDetails.displayName}</h1>
        </div>
      )}
    </>
  );
}

export default App;
