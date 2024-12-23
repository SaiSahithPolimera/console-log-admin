import Login from "./pages/Login"
import ErrorPage from "./pages/ErrorPage";
import Blog from "./pages/Blog";

const routes = [
    {
        path: "/",
        element: <Login />,
        errorElement: <ErrorPage/>
    },
    {
        path: "/blog",
        element: <Blog/>,
        errorElement: <ErrorPage/>

    }

]

export default routes;