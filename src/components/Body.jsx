import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {

    // const appBrowser = createBrowserRouter();

    return(
        <div>
            <Login />
            <Browse />
        </div>
    );
}

export default Body;