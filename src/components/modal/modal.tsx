import { ReactNode, useEffect } from "react";
import ModalOverlay from "../modal-overlay";
import style from "./modal.module.css";

type Props = {
    children?: ReactNode;
    onClose: () => void;
}

const Modal = (props: Props) => {
    const keydown = (event: KeyboardEvent) => {
        if (event.code === "Escape") props.onClose();
    };
    const click = (event: MouseEvent) => {
        const e = event.target as Element;
        if (e.className === 'modalOverlayBox')
            props.onClose();
    }

    useEffect(() => {
        document.addEventListener("keydown", keydown);
        document.addEventListener("click", click);
        return () => {
            document.removeEventListener("keydown", keydown);
            document.removeEventListener("click", click);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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