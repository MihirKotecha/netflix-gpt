import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./components/Browse";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import GptSearch from "./components/GptSearch";


function App() {


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Browse />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/search",
      element: <GptSearch />
    }
  ]);

  return <Provider store={appStore}><RouterProvider router={appRouter} /></Provider>;
}

export default App;
