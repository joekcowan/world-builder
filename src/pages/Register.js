// src/Register.js
import React, {useState} from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth, db} from "../utils/firebase";
import {Link, useNavigate} from "react-router-dom";
import {getErrorMessage} from "../utils/errorMessages";
import {getFirestore, doc, setDoc, query, collection, where, getDocs} from "firebase/firestore";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Function to check if username already exists
  const checkUsernameExists = async (username) => {
    const q = query(collection(db, "users"), where("username", "==", username));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;  // If querySnapshot is not empty, username exists
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {

      // Check if username is taken
      const usernameExists = await checkUsernameExists(username);
      if(usernameExists) {
        setError("Username is already taken. Please choose a different one.");
        return;
      }

      // Register user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store additional user information
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        username: username
      });

      navigate("/dashboard");  // Redirect to dashboard after successful registration
    } catch(error) {
      setError(getErrorMessage(error.code));
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Register</h3>
              <form onSubmit={handleRegister}>

                <div className="form-group mb-3">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {error && <p className="text-danger">{error}</p>}

                <button type="submit" className="btn btn-primary btn-block">
                  Register
                </button>
              </form>
              <p className="text-center mt-3">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
