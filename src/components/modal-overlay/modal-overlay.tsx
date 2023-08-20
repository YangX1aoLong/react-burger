import { ReactNode } from "react";
type Props = {
    children: ReactNode;
}
const ModalOverlay = (props:Props) => {
    return(
        <div className="modalOverlayBox">{props.children}</div>
    )
}

export default ModalOverlay;