import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router=createBrowserRouter([
  {
      path:"/",
      element:<Home/>
  },
  {
      path:"/about",
      element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
}

]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
