import {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {toggleActions} from "../store/toggle";
import {GetDirectory, GetTask} from "../store/tasks-action";
import {tasksAction} from "../store/tasks-slice";

import {Outlet, useLocation} from 'react-router-dom'

import Header from "../components/header/Header";
import TopPanel from "../components/topPanel/TopPanel";
import Title from "../components/title/Title";
import UserConfig from "../components/userConfig/UserConfig";
import Aside from "../components/aside/Aside";
import Footer from "../components/footer/Footer";
import Modal from "../components/modal/Modal";
import DeleteModal from "../components/modal/DeleteModal";
import DirectoryModal from "../components/modal/DirectoryModal";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
    const {
        isOpenMenu,
        isOpenAside,
        modalIsOpen,
        deleteModalIsOpen,
        directoryModalIsOpen
    } = useSelector(state => state.toggle)
    const {tasks, directories} = useSelector(state => state.tasks)
    const {darkMode} = useSelector(state => state.toggle)
    const {pathname} = useLocation()
    const dispatch = useDispatch()

    const closeMenu = () => {
        dispatch(toggleActions.closeMenu())
    }

    const closeAside = () => {
        dispatch(toggleActions.closeAside())
    }

    useEffect(() => {
        dispatch(GetTask())
    }, [dispatch, tasks])

    useEffect(() => {
        dispatch(GetDirectory())
    }, [directories])

    useEffect(() => {
        dispatch(tasksAction.setPathname(pathname))
    }, [dispatch, pathname])


    return (
        <div className={`${isOpenMenu ? 'wrapper bgc-dark' : 'wrapper'} ${darkMode ? 'dark' : ''}`}>
            <Header isOpen={isOpenMenu}/>
            <main>
                <TopPanel/>
                <Title/>
                <UserConfig/>
                <Outlet/>
            </main>
            <Aside isOpen={isOpenAside}/>
            <Footer/>
            <ToastContainer/>
            {isOpenMenu && <div className={'bgc-dark'} onClick={closeMenu}></div>}
            {isOpenAside && <div className={'bgc-dark'} onClick={closeAside}></div>}
            {modalIsOpen && <Modal/>}
            {deleteModalIsOpen && <DeleteModal darkMode={darkMode}/>}
            {directoryModalIsOpen && <DirectoryModal darkMode={darkMode}/>}
        </div>
    )
}

export default Home