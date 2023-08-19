import { ReactNode, useEffect} from "react";
import ModalOverlay from "../modal-overlay";
import style from "./modal.module.css";

type Props = {
    children?: ReactNode;
    onClose: any;
}
const Modal = (props:Props) => {
    const keydown = (event:any) => {
        if (event.code === "Escape") props.onClose();
    };
    const click = (event:any) => {
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

export default Modal;