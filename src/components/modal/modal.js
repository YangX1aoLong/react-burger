import { useState, useEffect, useRef } from "react";
import ModalOverlay from "../modal-overlay";
import PropTypes from 'prop-types'
const Modal = props => {
    const refModalBox = useRef();
    const [widthModalBox, setWidthModalBox] = useState(-500);
    const [heightModalBox, setHeightModalBox] = useState(-500);
    const [visible, setVisible] = useState(props.visible)
    const keydown = event => {
        if (event.code === "Escape") setVisible(false)
    };
    const click = event => {
        if (event.target.className === 'modalOverlayBox')
            setVisible(false)
    }
    useEffect(() => {
        document.addEventListener("keydown", keydown);
        document.addEventListener("click", click);
        return () => {
            document.removeEventListener("keydown", keydown);
            document.removeEventListener("click", click);
        }
    }, []);
    useEffect(() => {
        setVisible(props.visible);

    }, [props])
    useEffect(() => {
        if ((refModalBox.current.widthModalBox !== 0 || refModalBox.current.heightModalBox !== 0) &&
            -refModalBox.current.offsetWidth / 2 !== widthModalBox) {
            setWidthModalBox(-refModalBox.current.offsetWidth / 2);
            setHeightModalBox(-refModalBox.current.offsetHeight / 2);
        }
    })
    return (
        <>
            <ModalOverlay visible={visible}>
                <div ref={refModalBox} className="modalBox" style={{ marginTop: heightModalBox, marginLeft: widthModalBox }}>
                    {props.children}
                </div>
            </ModalOverlay>
        </>
    )
}
Modal.propTypes = {
    visible: PropTypes.bool
}
export default Modal;