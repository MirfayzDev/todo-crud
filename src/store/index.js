import {configureStore} from "@reduxjs/toolkit";
import tasks from "./tasks-slice";
import toggle from "./toggle";

export default configureStore({
    reducer: {tasks, toggle}
})
