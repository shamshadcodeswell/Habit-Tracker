import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./component/Header";
import CurrentDay from "./component/homepage/CurrentDay";
import Weekly from "./component/weekPage/Weekly";
import { useState } from "react";
import COMPLETIONS from "../utils/COMPLETIONS";

const AppLayout = () => {
  const [completions, setCompletions] = useState(COMPLETIONS);
  return (
    <div>
      <Header></Header>
      <Outlet context={{ completions, setCompletions }}></Outlet>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <CurrentDay></CurrentDay>,
      },
      {
        path: "/week",
        element: <Weekly></Weekly>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
