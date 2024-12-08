import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function SignRoute({children}) {

    const token = useSelector(state=>state.signinStore.token);
    if(token)
        return <Navigate to="/home" replace></Navigate>
    return children
}
function AuthRoute({children}) {

    const role = useSelector(state=>state.signinStore.role);
    if(role != 1 && role != 2 && role != 3)
        return <Navigate to="/home" replace></Navigate>
    return children
}

function NoLoginRoute({children}) {

    const role = useSelector(state=>state.signinStore.role);
    if(role == null)
        return <Navigate to="/home" replace></Navigate>
    return children
}

export  { SignRoute,AuthRoute,NoLoginRoute};
