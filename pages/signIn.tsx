import SignIn from '../components/SignIn/SignIn';
import PrivateRoute from "../components/PrivateRoute";
const Login =()=>{
    return(
        <>
            <SignIn/>
        </>
    )
}

export default PrivateRoute(Login);