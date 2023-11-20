import { 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
 } from "react-router-dom";
import NavLayout from "./layout-route/NavLayout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Quiz from "./pages/Quiz";


// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "category",
        element: <Category />
      }
    ]
  },
  {
    path: "quiz/:category/:difficulty/:username",
    element: <Quiz />
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
