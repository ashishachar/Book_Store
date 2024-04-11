import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";
import Books from "./components/Books";
import BookUpdate from "./components/BookUpdate";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Homepage />,
  },
  {
    path: "/books",
    element: <Books />,
  },
  {
    path : '/books/add',
    element : <BookUpdate />
  },
  {
    path: "/",
    element: <Homepage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
