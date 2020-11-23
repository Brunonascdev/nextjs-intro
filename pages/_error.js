import React from "react";
import Link from "next/link";

const errorPage = () => (
  <div className="">
    <h1>Oops, something went wrong.</h1>
    <p>
      Try{" "}
      <Link href="/">
        <a>Going back</a>
      </Link>
    </p>
  </div>
);

export default errorPage;
