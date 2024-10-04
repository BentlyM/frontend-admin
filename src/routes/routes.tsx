import { RouteObject } from "react-router-dom";
import App from "../pages/App";


interface Route {
    path?: string;
    element: React.ReactNode;
    index?: boolean;
    children?: Route[];
}


const routes : Route[] = [
    {
        path: '/',
        element: <App />
    },
]

export default routes as RouteObject[];