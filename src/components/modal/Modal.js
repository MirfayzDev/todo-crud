import ReactDOM from "react-dom";
import {Fragment} from "react";

import ModalOverlay from "./ModalOverlay";
import ModalBackdrop from "./ModalBackdrop";

import {useDispatch} from "react-redux";
import {toggleActions} from "../../store/toggle";

const Modal = () => {
    const dispatch = useDispatch()

    const closeModal = () => {
        dispatch(toggleActions.closeModal())
    }

    return (
        <Fragment>
            {
                ReactDOM.createPortal(<ModalBackdrop closeModal={closeModal}/>, document.getElementById('modal'))
            }
            {
                ReactDOM.createPortal(<ModalOverlay closeModal={closeModal}/>, document.getElementById('modal'))
            }
        </Fragment>
    )
}

export default Modal