import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({component:Component, ...rest}){
    return(
        <PrivateRoute {...rest}
            render={() => {
                if( localStorage.getItem("token")){
                    return <Component/>;
                } else {
                    return <Redirect to="login"/>;
                }
            }}
        />
    );
}