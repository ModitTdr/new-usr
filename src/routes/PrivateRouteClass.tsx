import { useAuth } from "@/hook/useAuth";
import LoadingPage from "@/pages/LoadingPage";
import { Component } from "react";
import { Navigate } from "react-router";

interface PrivateRouteProps {
  children: React.ReactNode;
  authData: { isAuthenticated: boolean, isLoading: boolean }
  allowedRoles?: string[];
}

/* @ts-expect-error: Legacy code block without defined types */
function withProps(Component) {
  /* @ts-expect-error: Legacy code block without defined types */
  return (props) => {
    const auth = useAuth();
    if (!auth.isLoading)
      return <Component {...props} authData={auth} />
  }
}

class PrivateRoute extends Component<PrivateRouteProps> {
  constructor(props: PrivateRouteProps) {
    super(props)
  }

  render() {
    const { isAuthenticated, isLoading } = this.props.authData;
    // const allowedRoles = this.props.allowedRoles;
    if (isLoading) return <LoadingPage />

    if (!isAuthenticated) return <Navigate to="/login" />

    // if (allowedRoles && !allowedRoles.includes(user?.role))
    //   return <Navigate to="/login" />

    return <>{this.props.children}</>
  }
}

export default withProps(PrivateRoute);