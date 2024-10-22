// src/Login.js
import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import {auth} from "../utils/firebase";
import {getErrorMessage} from "../utils/errorMessages";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Function to check if the user is already logged in
  const checkUserLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        navigate("/dashboard");  // If user is logged in, redirect to dashboard
      }
    });
  };

  useEffect(() => {
    checkUserLoggedIn(); // Call the function when the component mounts
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");  // Redirect to dashboard after successful login
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
              <h3 className="card-title text-center">Login</h3>
              <form onSubmit={handleLogin}>
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
                  Login
                </button>
              </form>
              <p className="text-center mt-3">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
