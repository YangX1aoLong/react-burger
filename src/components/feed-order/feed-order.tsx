import { useLocation } from "react-router";
import style from "./feed-order.module.css"
import { shallowEqual, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { TFeedOrder } from "../../types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { getDate } from "../../utils/other-functions";
const FeedOrder = () => {
    const location = useLocation();
    const { feed } = useSelector(
        (store: any) => ({ feed: store.feed.data.orders.find((i: TFeedOrder) => i._id === location.pathname.substring(6)) }),
        shallowEqual
    );
    const [order, setOrder] = useState<TFeedOrder>();
    useEffect(() => {
        setOrder(feed);
    }, [])

    const getStatus = (status: string | undefined) => {
        if (status === "done")
            return "Выполнен";
        else return "В работе"
    }

    return (
        <div className={style.window}>
            <p className="textGrey textCenter text text_type_digits-default">#{order?.number}</p>
            <p className={`textGrey text text_type_main-medium mt-10`}>{order?.name}</p>
            <p className={`textGreen text text_type_main-default mt-3`}>{getStatus(order?.status)}</p>
            <p className={`textGrey text text_type_main-medium mt-15`}>Состав:</p>
            <div className={`${style.ingredientsBox}`}>
                

            </div>
            <div className={`${style.thumb}mt-10 container`}>
                <p className={`textDarkGrey text text_type_main-default`}>{getDate(order?.createdAt)}</p>  
                <p className={`${style.price} textGrey text text_type_digits-default mr-2`}>{100}</p>
                <CurrencyIcon type="primary" />
            </div>
        </div>
    )
}
export default FeedOrder;