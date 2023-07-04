import PropTypes from "prop-types";
const ModalOverlay = (props) => {
    return(
        <div className="modalOverlayBox">{props.children}</div>
    )
}
ModalOverlay.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
    
}
export default ModalOverlay;