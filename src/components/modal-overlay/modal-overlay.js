import PropTypes from "prop-types";
const ModalOverlay = props => {
    return(
        <div className="modalOverlayBox" style={{display:props.visible?'flex':'none'}}>{props.children}</div>
    )
}
ModalOverlay.propTypes = {
    visible:PropTypes.bool.isRequired
}
export default ModalOverlay;