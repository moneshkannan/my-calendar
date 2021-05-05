import { Route, Redirect } from "react-router-dom";
import { isLoggedIn, isAdmin } from "./authCheck";
import Notification from "./NotificationService";


const ProtectedRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={props => {
        const isLoggedin = isLoggedIn();
        if (!isLoggedin) {
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
        else {
            return <Component {...props} />
        }
    }}
    />
}

const AdminRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={props => {
        const isAdmIn = isAdmin()
        if (!isAdmIn) {
            Notification.show({ status: false, message: "You don't have permission to access this page" });
            < Redirect to={{ pathname: '/', state: { from: props.location } }} />
        }
        else {
            <Component {...props} />
        }
    }}
    />
}


export { ProtectedRoute, AdminRoute }