import FeedOrder from "../components/feed-order";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect, disconnect } from "../services/actions/feed";
import { urlOrdersAll } from "../utils/get-data";
export const FeedOrderPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(connect(urlOrdersAll));
        return () => {
            dispatch(disconnect());
        }
    }, [])
    return <FeedOrder/>;
}