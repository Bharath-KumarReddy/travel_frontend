import { useNavigate } from 'react-router-dom';
import "./Auth.css";
import { useAuth, useAlert } from "../../context";
import {
  validateEmail,
  validateName,
  validateNumber,
  validatePassword,
} from "../../utlis";

import { signupHandler } from "../../services";
import { flag } from '../../services/signup-service';
import { type } from '@testing-library/user-event/dist/type';
let isNumberValid,
  isNameValid,
  isEmailValid,
  isPasswordValid,
  isConfirmPasswordValid;

export const AuthSignup = () => {

  const navigate = useNavigate();

  const { username, email, password, number, confirmPassword, authDispatch } =
    useAuth();
  
  const { setAlert } = useAlert();

  const handleNumberChange =  (event) => {
    isNumberValid =  validateNumber(event.target.value);
    if (isNumberValid) {
      console.log("Valid Input");
      authDispatch({
        type: "NUMBER",
        payload: event.target.value,
      });
    } 
  };

  const handleNameChange =  (event) => {
  
      
      isNameValid =  validateName(event.target.value);
      if (isNameValid) {
        console.log("Valid Input");
        authDispatch({
          type: "NAME",
          payload: event.target.value,
        });
      } 
    
  };

  const handleEmailChange =  (event) => {
    isEmailValid=  validateEmail(event.target.value);
    if (isEmailValid) {
      console.log("Valid Input");
      authDispatch({
        type: "EMAIL",
        payload: event.target.value,
      });
    } 
    
  };

  const handlePasswordChange = (event) => {
    isPasswordValid = validatePassword(event.target.value);
    if (isPasswordValid) {
      console.log("Valid Input");
      authDispatch({
        type: "PASSWORD",
        payload: event.target.value,
      });
    } 
  };

  const handleConfirmPasswordChange =  (event) => {
    isConfirmPasswordValid =validatePassword(event.target.value);
    if (isConfirmPasswordValid) {
      console.log("Valid Input");
      authDispatch({
        type: "CONFIRM_PASSWORD",
        payload: event.target.value,
      });
    } 
  };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   if (
  //     isNumberValid &&
  //     isNameValid &&
  //     isEmailValid &&
  //     isPasswordValid &&
  //     isConfirmPasswordValid
  //   ) {
  //     await signupHandler(username, number, email, password,setAlert);
  //   }

  //   // authDispatch({
  //   //   type: "SET_USER_NAME",
  //   //   payload: username,
  //   // });
  //   if(flag!=1){

  //     authDispatch({ type: "SET_TO_LOGIN" });
  //     authDispatch({
  //       type: "CLEAR_USER_DATA",
  //     });
  //   }
  //   // authDispatch({
  //   //   type: "SHOW_AUTH_MODAL",
  //   // });
  
   
  // };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if(confirmPassword != password){
      setAlert({
        open:true,
        message:`passwords do not matched`,
        type:"error"
      })
      
    }

    else if(!isNumberValid){
      setAlert({
        open:true,
        message:`Invalid Number,length should be 10 digits`,
        type:"error"
      })
      return;
    }

    else if(!isNameValid){
      setAlert({
        open:true,
        message:`Invalid Name,should contain only alphabets`,
        type:"error"
      })
      return;
    }

    // if(!isEmailValid){
    //   setAlert({
    //     open:true,
    //     message:`Invalid Email`,
    //     type:"error"
    //   })
    //   return;
    // }

   else if(!isPasswordValid){
      setAlert({
        open:true,
        message:`password contains at least one lowercase letter, one uppercase letter, one digit, one special character, and has a minimum length of 5`,
        type:"error"
      })
      return;
    }

    else if(!isConfirmPasswordValid){
      setAlert({
        open:true,
        message:`Invalid password`,
        type:"error"
      })
      return;
    }else {
       
    if (
      isNumberValid &&
      isNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid
    ) {
      await signupHandler(username, number, email, password, setAlert);
      console.log(flag);
     if (flag !=1) {
      authDispatch({ type: "SET_TO_LOGIN" });
      authDispatch({ type: "CLEAR_USER_DATA" });
     }
    }else {
      setAlert({
        open:true,
        message:`try again,an error ocurred`,
        type:"error"
      })
     
    }
    }
 
   
  
    
  };
  

  
  return (
    <div className="auth-container">
      <form onSubmit={handleFormSubmit}>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Mobile Number <span className="asterisk">*</span>{" "}
          </label>
          <input
            defaultValue={number}
            type="number"
            className="auth-input"
            maxLength="10"
            placeholder="Enter Mobile Number"
            required
            onChange={handleNumberChange}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Name <span className="asterisk">*</span>{" "}
          </label>
          <input
            defaultValue={username}
            className="auth-input"
            placeholder="Enter Name"
            required
            onChange={handleNameChange}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Email <span className="asterisk">*</span>{" "}
          </label>
          <input
            defaultValue={email}
            className="auth-input"
            placeholder="Enter Email"
            type="email"
            required
            onChange={handleEmailChange}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Password <span className="asterisk">*</span>{" "}
          </label>
          <input
            defaultValue={password}
            className="auth-input"
            placeholder="Enter Password"
            type="password"
            required
            onChange={handlePasswordChange}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Confirm Password <span className="asterisk">*</span>{" "}
          </label>
          <input
            defaultValue={confirmPassword}
            className="auth-input"
            placeholder="Enter Password"
            type="password"
            required
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <div>
          <button className="button btn-primary btn-login cursor">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};