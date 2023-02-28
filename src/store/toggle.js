import {createSlice} from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: 'toggle',
    initialState: {
        isOpenMenu: false,
        isOpenDirectory: true,
        isOpenAside: false,
        darkMode: false,
        modalIsOpen: false,
        deleteModalIsOpen: false,
        directoryModalIsOpen: false,
        listType: 'Column',
        modalType: '',
    },
    reducers: {
        replaceState(state, action) {
            state = action.payload
        },

        openMenu(state) {
            state.isOpenMenu = true
        },

        toggleDirectory(state) {
            state.isOpenDirectory = !state.isOpenDirectory
        },

        closeMenu(state) {
            state.isOpenMenu = false
        },

        openAside(state) {
            state.isOpenAside = true
        },

        closeAside(state) {
            state.isOpenAside = false
        },

        darkModeOn(state) {
            state.darkMode = true
        },

        darkModeOff(state) {
            state.darkMode = false
        },

        openAddModal(state) {
            state.modalIsOpen = true
            state.modalType = 'addModal'
        },

        openEditModal(state) {
            state.modalIsOpen = true
            state.modalType = 'editModal'
        },

        openDeleteModal(state) {
            state.deleteModalIsOpen = true
         },

        directoryModal(state) {
            state.directoryModalIsOpen = true
         },

        closeModal(state) {
            state.modalIsOpen = false
            state.deleteModalIsOpen = false
            state.directoryModalIsOpen = false
            state.modalType = ''
        },

        changeTypeList(state, action) {
            state.listType = action.payload
        }
    }
})

export const toggleActions = toggleSlice.actions
export default toggleSlice.reducer