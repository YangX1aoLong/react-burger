import FeedOrder from "../components/feed-order";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect, disconnect } from "../services/actions/feed";
import { urlOrdersAll } from "../utils/get-data";
import Modal from "../components/modal";
import { useNavigate } from "react-router";
export const FeedOrderPageModal = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(connect(urlOrdersAll));
        return () => {
            dispatch(disconnect());
        }
    }, [])
    const navigate = useNavigate();
    const onClose = () => {
        navigate(-1);
    };
    return (
        <Modal onClose={onClose}><FeedOrder modal={true}/></Modal>)
}