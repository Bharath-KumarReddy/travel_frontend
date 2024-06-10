import "./Auth.css";
import { validateNumber, validatePassword } from "../../utlis";
import { loginHandler } from "../../services";
import { useAuth, useAlert } from "../../context";
import { type } from "@testing-library/user-event/dist/type";

let isNumberValid, isPasswordValid;

export const AuthLogin = () => {
  const { authDispatch, number, password } = useAuth();
  const { setAlert } = useAlert();

  const handleNumberChange = (event) => {
    isNumberValid = validateNumber(event.target.value);
    if (isNumberValid) {
      console.log("Valid Input");
      authDispatch({
        type: "NUMBER",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Number");
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
    } else {
      console.log("Invalid Password");
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if(!isNumberValid){
        setAlert({
          open:true,
          message:`Invalid Number,length should be 10 digits`,
          type:"error"
        })
      }else if(!isPasswordValid){
        setAlert({
          open:true,
          message:`password contains at least one lowercase letter, one uppercase letter, one digit, one special character, and has a minimum length of 5`,
          type:"error"
        })
      }else {
        const { accessToken, username } = await loginHandler(number, password, setAlert);
          authDispatch({
            type: "SET_ACCESS_TOKEN",
            payload: accessToken,
          });
          authDispatch({
            type: "SET_USER_NAME",
            payload: username,
          });
    
        
        authDispatch({
          type: "CLEAR_USER_DATA",
        });
        authDispatch({
          type: "SHOW_AUTH_MODAL",
        });
      }

    } catch (error) {
      setAlert({
        open: true,
        message: `Invalid credentials`,
        type: "error"
      })
      console.log(error);
    }
  };

  const handleTestCredentialsClick = async () => {
    try {

      const { accessToken, username } = await loginHandler(
        "7878787878",
        "Abcd@239",
      );
      authDispatch({
        type: "SET_ACCESS_TOKEN",
        payload: accessToken,
      });
      authDispatch({
        type: "SET_USER_NAME",
        payload: username,
      });
      authDispatch({
        type: "CLEAR_USER_DATA",
      });
      authDispatch({
        type: "SHOW_AUTH_MODAL",
      });
    } catch (error) {
       console.log(error.message);
       setAlert({
        open:true,
        message:`unable to login -${error.message}`,
        type:"error"
       })

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
        <div>
          <button className="button btn-primary btn-login cursor">Login</button>
        </div>
      </form>
      {/* <div className="cta">
        <button
          className="button btn-outline-primary cursor-pointer"
          onClick={handleTestCredentialsClick}
        >
          Login with Test Credentials
        </button>
      </div> */}
    </div>
  );
};