
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";


const Body = () => {
  // first thing should be your hook
  


  const appRouter = createBrowserRouter([
    {
      path: "/",
      //error rendering body component in body itself ..infinite loop..
      //element: <Body/>,
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);



  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
