import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from "./pages/Home";
import AllTasks from "./pages/AllTasks";
import TodayTasks from "./pages/TodayTasks";
import Important from "./pages/Important";
import Completed from "./pages/Completed";
import Uncompleted from "./pages/Uncompleted";
import Error from "./pages/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <Error/>,
        children: [
            {index: true, element: <AllTasks/>},
            {path: 'today', element: <TodayTasks/>},
            {path: 'important', element: <Important/>},
            {path: 'completed', element: <Completed/>},
            {path: 'uncompleted', element: <Uncompleted/>},
        ]
    }
])

function App() {
    return <RouterProvider router={router}/>
}

export default App;
