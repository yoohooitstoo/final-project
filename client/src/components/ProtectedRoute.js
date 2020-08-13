import React from "react";
import { Route, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";

const ProtectedRoute= ({ path, component: Component, render, ...rest}) => {
    console.log("protected Route");
    
    const getCurrentUser = function(){
        const jwt = localStorage.getItem("jwt")
        return jwtDecode(jwt);
      }

    return(
        <Route {...rest} render={(props) =>{
            if (!getCurrentUser()) {
                return(
                    <Redirect to={{ pathname: "/login", state: { from: props.location }}}
                    />
                );
            }else{
                console.log("made it here");
                return Component ? <Component {...props} /> : render(props);
            }
        }}
        />
    )
}

export default ProtectedRoute;