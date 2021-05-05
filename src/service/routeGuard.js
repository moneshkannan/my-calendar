import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={props => {
        const isLoggedin = true;
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
        const isAdmin = true;
        if (!isAdmin) {
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        }
        else {
            <Component {...props} />
        }
    }}
    />
}


export { ProtectedRoute, AdminRoute }