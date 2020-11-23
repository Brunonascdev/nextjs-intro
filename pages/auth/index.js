import React from "react";
import User from "../../components/User";

const authIndexPage = (props) => (
  <div className="">
    <h1>The auth page. {props.appName}</h1>
    <User age={29} name="Bruno" />
  </div>
);

authIndexPage.getInitialProps = (context) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "Super App (Auth)" });
    }, 1000);
  });
  return promise;
};

export default authIndexPage;
