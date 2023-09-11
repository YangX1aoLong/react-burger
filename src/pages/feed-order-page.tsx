import FeedOrder from "../components/feed-order";
import { useEffect } from "react";
import { connect, disconnect } from "../services/actions/feed";
import { urlOrdersAll } from "../utils/get-data";
import { useAppDispatch } from "../utils/hooks";
export const FeedOrderPage = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(connect(urlOrdersAll));
        return () => {
            dispatch(disconnect());
        }
    }, [])
    return <FeedOrder modal={false}/>;
}