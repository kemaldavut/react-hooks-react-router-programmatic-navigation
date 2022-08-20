import React from "react";
import { Redirect } from "react-router-dom";

function Home({ isLoggedIn }) {
  if (!isLoggedIn) return <Redirect to="Home" />;

  if (isLoggedIn) {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
  else {
    return (
      <Redirect 
        to="login"
      />
    );
  }
}


export default Home;
