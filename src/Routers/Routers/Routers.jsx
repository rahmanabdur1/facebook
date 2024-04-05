
import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Users from "../../pages/Users/Users";
import Main from "../../layout/Main";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path:'/users',
                element:<Users/>
            },
        ]
    }
])