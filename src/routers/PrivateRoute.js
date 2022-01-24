import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    Navigate: () => <span>Exit</span>,
}));

export const PrivateRoute = ({children}) => {
    
    const {user} = useContext(AuthContext);
    const {pathname, search} = useLocation();
    
    localStorage.setItem('lastPath', pathname + search);

    return user.logged
        ? children
        : <Navigate to="/login"/>
}
