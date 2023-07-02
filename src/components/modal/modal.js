import { useState, useEffect, useRef } from "react";
import ModalOverlay from "../modal-overlay";
import PropTypes from "prop-types";
import style from "./modal.module.css";
const Modal = props => {
    const keydown = event => {
        if (event.code === "Escape") props.onClose();
    };
    const click = event => {
        if (event.target.className === 'modalOverlayBox')
            props.onClose();
    }

    useEffect(() => {
        document.addEventListener("keydown", keydown);
        document.addEventListener("click", click);
        return () => {
            document.removeEventListener("keydown", keydown);
            document.removeEventListener("click", click);
        }
    }, []);

    return (
        <>
            <ModalOverlay>
                <div className={style.modalBox}>
                    {props.children}
                </div>
            </ModalOverlay>
        </>
    )
}
Modal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    onClose: PropTypes.func.isRequired
}
export default Modal;