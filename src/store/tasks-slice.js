import {createSlice} from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        selectedTask: {},
        directories: [],
        searchList: [],
        searchValue: '',
        sortValue: '',
        pathname: '/',
        title: ''
    },

    reducers: {
        addTask(state, action) {
            const tasksList = [...Object.values(action.payload || [])]
            const currentDate = new Date().toLocaleDateString('uz-Uz', {year: 'numeric', month: "2-digit", day: "2-digit"})

            if (state.pathname === '/') {
                state.tasks = tasksList
                state.title = 'All Tasks (' + state.tasks.length + ' tasks)'
            }

            if (state.pathname === '/today') {
                state.tasks = tasksList.filter(task => task.date === currentDate)
                state.title = 'Today\'s tasks (' + state.tasks.length + ' tasks)'
            }

            if (state.pathname === '/important') {
                state.tasks = tasksList.filter(task => task.important)
                state.title = 'Important tasks (' + state.tasks.length + ' tasks)'
            }

            if (state.pathname === '/completed') {
                state.tasks = tasksList.filter(task => task.completed)
                state.title = 'Completed tasks (' + state.tasks.length + ' tasks)'
            }

            if (state.pathname === '/uncompleted') {
                state.tasks = tasksList.filter(task => !task.completed)
                state.title = 'Uncompleted tasks (' + state.tasks.length + ' tasks)'
            }

            if (state.sortValue === 'Later first') {
                state.tasks = state.tasks.reverse()
            }

            if (state.sortValue === 'Completed first') {
                state.tasks = state.tasks.sort((a, b) => b.completed - a.completed)
            }

            if (state.sortValue === 'Uncompleted first') {
                state.tasks = state.tasks.sort((a, b) => a.completed - b.completed)
            }
        },

        editTask(state, action) {
            state.tasks = state.tasks.map(task => {
                if (task.id === state.selectedTask.id) {
                    return {...task, ...action.payload}
                }
                return task
            })
        },

        getSelectedTask(state, action) {
            state.selectedTask = action.payload
        },

        deleteTask(state, action) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id)
        },

        addDirectory(state, action) {
            state.directories = [...Object.values(action.payload || [])]
        },

        setSearchValue(state, action) {
            state.searchValue = action.payload
        },

        filterList(state, action) {
            state.searchList = state.tasks.filter(task => task.title.toLowerCase().includes(action.payload.toLowerCase()))
        },

        setSortValue(state, action) {
            state.sortValue = action.payload
        },

        setPathname(state, action) {
            state.pathname = action.payload
        }
    }
})

export const tasksAction = tasksSlice.actions
export default tasksSlice.reducer