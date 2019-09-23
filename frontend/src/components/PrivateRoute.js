import { Route } from 'react-router-dom';

let isLoggedIn = false;

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        isLoggedIn === true
        ? 
        <Component {...props} />
        : 
        <Redirect to='/' />
    )} />
)


export default PrivateRoute;