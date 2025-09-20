import ReactDOM from "react-dom/client";
import ".././index.css";

import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router";
import Error from "./components/Error";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <h1>This is about page</h1>,
  },
  {
    path: "/contact",
    element: <h1>This is contact us page</h1>,
  },
  {
    path: "/cart",
    element: <h1>This is cart Page</h1>,
  },
  {
    path: "/home",
    element: <h1>This is home page</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
