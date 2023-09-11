import FeedOrder from "../components/feed-order";
import { useEffect } from "react";
import { connect, disconnect } from "../services/actions/feed";
import { urlOrdersAll } from "../utils/get-data";
import Modal from "../components/modal";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../utils/hooks";
export const FeedOrderPageModal = () => {
    const dispatch = useAppDispatch();
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