import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavLayout from "./layout-route/NavLayout";
import { Home, Category, Quiz } from "./pages/Pages"


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
