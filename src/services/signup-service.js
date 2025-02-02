import axios from "axios";
import { useAuth } from "../context";
import { type } from "@testing-library/user-event/dist/type";
export var flag =0;
export const signupHandler = async (username, number, email, password,setAlert) => {
 

  try {
    const data = await axios.post(
      "https://travel-backend-3-p68x.onrender.com/api/auth/register",
      {
        username: username,
        number: number,
        email: email,
        password: password,
      }
    );

    

    console.log("Signed Up");
    console.log(data);

    if(data.data.message ==
      "User already created, try a unique Number"
      ){
        setAlert({
          open:true,
          message : "User already created, try a unique Number",
          type : "error"
        })
        flag=1;
        console.log(flag);
        return;
      }else if(data.data.message == 'User already exists with this Email'){
        setAlert({
          open:true,
          message : 'User already exists with this Email',
          type : "error"
        })
        flag=1;
        console.log(flag);
        return;
      }else {
        setAlert({
          open: true,
          message: `Account Created:: username - ${username}`,
          type: "success"
        })
    }
    // navigate("/login")
    // authDispatch({ type: "SET_TO_LOGIN" });
  } catch (err) {
    console.log("error adding user to database");
    setAlert({
      open: true,
      message: `error adding user to database - ${username}-${err.message}`,
      type: "error"
    })
  }
};