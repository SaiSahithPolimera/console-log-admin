import Login from "./pages/Login"
import PostEditor from "./pages/PostEditor";
import ErrorPage from "./pages/ErrorPage";
import Blog from "./pages/Blog";

const routes = [
    {
        path: "/",
        element: <Login />,
        errorElement: <ErrorPage />
    },
    {
        path: "/blog",
        element: <Blog />,
        errorElement: <ErrorPage />

    },
    {
        path: "/blog/:title/edit",
        element: <PostEditor />,
        errorElement: <ErrorPage />

    },
    {
        path: "/blog/new",
        element: <PostEditor />,
        errorElement: <ErrorPage />
    }

]

export default routes;