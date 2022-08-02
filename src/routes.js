import React from "react";

// pages
const SignIn = React.lazy(() => import("./pages/auth/SignIn"));

const routes = [
  {
    path: "/",
    element: <SignIn />,
  },
];

export default routes;
