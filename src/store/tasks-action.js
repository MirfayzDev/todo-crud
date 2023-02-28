import {tasksAction} from "./tasks-slice";
import {toast} from "react-toastify";

export const PostTask = (tasks) => {
    return async () => {
        const sendRequest = async () => {
            const response = await fetch('https://todo-db6ab-default-rtdb.firebaseio.com/tasks.json', {
                method: 'POST',
                body: JSON.stringify({
                    title: tasks.title,
                    description: tasks.description,
                    date: tasks.date,
                })
            })

            if (!response.ok) {
                throw new Error('Something went wrong!')
            }

            const id = (await response.json()).name

            await fetch(`https://todo-db6ab-default-rtdb.firebaseio.com/tasks/${id}.json`, {
                method: "PATCH",
                body: JSON.stringify({
                    id, ...tasks
                })
            })
        }

        try {
            await sendRequest()
        } catch (error) {
            toast.error(error.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }
}

export const PostDirectory = (directories) => {
    return async () => {
        const sendRequest = async () => {
            const response = await fetch('https://todo-db6ab-default-rtdb.firebaseio.com/directories.json', {
                method: 'POST',
                body: JSON.stringify(directories)
            })

            if (!response.ok) {
                throw new Error('Something went wrong!')
            }

            const id = (await response.json()).name

            await fetch(`https://todo-db6ab-default-rtdb.firebaseio.com/directories/${id}.json`, {
                method: "PATCH",
                body: JSON.stringify({
                    id, ...directories
                })
            })
        }

        try {
            await sendRequest()
        } catch (error) {
            toast.error(error.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }
}

export const GetTask = () => {
    return async dispatch => {
        const sendRequest = async () => {
            const response = await fetch('https://todo-db6ab-default-rtdb.firebaseio.com/tasks.json')

            if (!response.ok) {
                throw new Error('Fetching failed!')
            }

            return response.json()
        }

        try {
            const data = await sendRequest()
            dispatch(tasksAction.addTask(data))
        } catch (error) {
            toast.error(error.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }
}

export const GetDirectory = () => {
    return async dispatch => {
        const sendRequest = async () => {
            const response = await fetch('https://todo-db6ab-default-rtdb.firebaseio.com/directories.json')

            if (!response.ok) {
                throw new Error('Fetching failed!')
            }

            return response.json()
        }

        try {
            const data = await sendRequest()
            dispatch(tasksAction.addDirectory(data))
        } catch (error) {
            toast.error(error.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }
}

export const EditTask = (task) => {
    return async dispatch => {
        const sendRequest = async () => {
            const response = await fetch( `https://todo-db6ab-default-rtdb.firebaseio.com/tasks/${task.id}.json`,{
                method: 'PATCH',
                body: JSON.stringify(task)
            })

            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
        }

        try {
            await sendRequest()
            dispatch(tasksAction.editTask(task))
        } catch (error) {
            toast.error(error.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }
}

export const DeleteTask = (task) => {
    return async dispatch => {
        const sendRequest = async () => {
            const response = await fetch(`https://todo-db6ab-default-rtdb.firebaseio.com/tasks/${task.id}.json`, {
                method: 'DELETE',
            })

            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
        }

        try {
            await sendRequest()
            dispatch(tasksAction.deleteTask(task))
        } catch (error) {
            toast.error(error.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }
}

export const ToggleCompleteTask = (task) => {
    return async () => {
        const sendRequest = async () => {
            const response = await fetch( `https://todo-db6ab-default-rtdb.firebaseio.com/tasks/${task.id}.json`,{
                method: 'PATCH',
                body: JSON.stringify({...task, completed: !task.completed})
            })

            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
        }

        try {
            await sendRequest()
        } catch (error) {
            toast.error(error.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }
}

export const ToggleImportantTask = (task) => {
    return async () => {
        const sendRequest = async () => {
            const response = await fetch( `https://todo-db6ab-default-rtdb.firebaseio.com/tasks/${task.id}.json`,{
                method: 'PATCH',
                body: JSON.stringify({...task, important: !task.important})
            })

            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
        }

        try {
            await sendRequest()
        } catch (error) {
            toast.error(error.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }
}