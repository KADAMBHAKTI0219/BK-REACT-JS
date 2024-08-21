import React, { useState } from 'react';
import { auth, provider } from '../Services/Firebase';
import { createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import GoogleButton from 'react-google-button';
import { BiLogOut } from 'react-icons/bi';
import { RiLoginCircleFill } from 'react-icons/ri';
import { IoCreate } from 'react-icons/io5';

const LoginPage = () => {
    const [formToggle, setFormToggle] = useState(true);
    const initialFormData = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
    const [formData, setFormData] = useState(initialFormData);
    const [loading, setLoading] = useState(false);
    const { firstName, lastName, email, password } = formData;
  
    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const signUpFormSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Your Account Is Created Successfully");
        setFormData(initialFormData);
      } catch (err) {
        console.error(err);
        alert(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    const signInFormSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Login Successfully');
        setFormData(initialFormData);
      } catch (err) {
        console.error(err);
        alert(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    const signInWithGoogle = async () => {
      setLoading(true);
      try {
        await signInWithPopup(auth, provider);
        alert('Login Successfully with Google');
      } catch (err) {
        console.error(err);
        alert(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    const signOutUser = async () => {
      const user = auth.currentUser;
        if (user) {
          deleteUser(user).then(() => {
            alert("User account deleted");
          }).catch((error) => {
            console.log("Error during account deletion:", error);
            alert("Failed to delete user account");
          });
        } else {
          alert("No user is currently signed in");
        }
    };
  
  return (
    <div>
       <div className="toggleBtnDiv">
        <button onClick={() => setFormToggle(!formToggle)} className="toggleBtn">
          {formToggle ? <h4><IoCreate />Sign Up</h4> : <h4><RiLoginCircleFill />Sign In</h4>}
        </button>
      </div>
      {formToggle ? (
        <div className="FormsLoginBtn">
          <form className="LoginForm" onSubmit={signUpFormSubmit}>
            <input type="text" placeholder="First Name" name="firstName" value={firstName} onChange={handleInputChange} />
            <input type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={handleInputChange} />
         
            <input type="email" placeholder="Email Address" name="email" value={email} onChange={handleInputChange} />
            <input type="password" placeholder="Password" name="password" value={password} onChange={handleInputChange} />
            <button type="submit" className="SubmitBtn" disabled={loading}>{loading ? 'Loading...' : 'Apply'}</button>
          </form>
        </div>
      ) : (
        <div className="FormsLoginBtn">
          <form className="LoginForm" onSubmit={signInFormSubmit}>
            <h2>Sign In</h2>
            <input type="email" placeholder="Enter Your Email" name="email" value={email} onChange={handleInputChange} />
            <input type="password" placeholder="Enter Your Password" name="password" value={password} onChange={handleInputChange} />
            <div className="btnSignUp">
              <button type="submit" className="SubmitBtn" disabled={loading}>{loading ? 'Loading...' : 'Sign In'}</button>
              <button type="button" onClick={signOutUser} className="btnLogout" disabled={loading}><BiLogOut />Logout</button>
            </div>
            <h4>Or</h4>
            <GoogleButton onClick={signInWithGoogle} style={{ display: "block", margin: "auto", borderRadius: "5px" }} disabled={loading} />
          </form>
        </div>
      )}
    </div>
  )
}

export default LoginPage
