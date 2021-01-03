import { Route, Redirect } from 'react-router-dom';
function PrivateRoute({ component: Component, isLogin, ...rest }) {
    return (
        <Route
            {...rest}
            render={
                props =>
                    isLogin ? (
                        <Component {...props} />
                    ) : (
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { redirect: props.location.pathname }
                                }}
                            />
                        )
            }
        />
    );
}

export default PrivateRoute;
