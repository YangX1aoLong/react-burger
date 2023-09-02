import { useLocation } from "react-router";
import style from "./feed-order.module.css"
import { shallowEqual, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { TFeedOrder, TIngredient } from "../../types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { getDate } from "../../utils/other-functions";
type TIngredientWithCount = TIngredient & {
    count: number;
}
const FeedOrder = () => {
    const location = useLocation();
    const { feed } = useSelector(
        (store: any) => ({ feed: store.feed.data.orders.find((i: TFeedOrder) => i._id === location.pathname.substring(6)) }),
        shallowEqual
    );
    const { ingredients } = useSelector(
        (store: any) => ({ ingredients: store.ingredients.data }),
        shallowEqual
    );
    const [order, setOrder] = useState<TFeedOrder>();
    const [ingredientDetail, setIngredientDetail] = useState<TIngredientWithCount[]>();

    useEffect(() => {
        setOrder(feed);
        getIngredient(feed.ingredients);
    }, [ingredients])
    const getIngredient = (ingredientsDetails: [string]) => {
        let data: TIngredientWithCount[] = [];
        for (let i = 0; i < ingredientsDetails.length; i++) {
            const index = data.findIndex((j: TIngredient) => j?._id === ingredientsDetails[i]);
            if (index !== -1)
                data[index] = { ...data[index], count: ++data[index].count }
            else if (ingredients.find((j: TIngredient) => j._id === ingredientsDetails[i]))
                data.push({ ...ingredients.find((j: TIngredient) => j._id === ingredientsDetails[i]), count: 1 });
        }
        setIngredientDetail(data);
    }
    const getPrice = () => {
        let price = 0;
        if (ingredientDetail)
            for (let i = 0; i < ingredientDetail?.length; i++) {
                price += ingredientDetail[i].price * ingredientDetail[i].count;
            }
        return price;
    }
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
                {
                    ingredientDetail?.map((i: TIngredientWithCount, index: number) => {
                        if (i === undefined) return (<div key={index} />)
                        return (
                            <div key={index} className={` ${index === 0 ? "mt-6" : "mt-4"} container`}>
                                <div key={index} className={style.imageBox}>
                                    <img className={style.image} alt={i.name} height={64} width={100} src={i.image}></img>
                                </div>
                                <p className={`textGrey text text_type_main-default mt-5 ml-4`}>{i.name}</p>
                                <p className={`${style.priceIngredient} textGrey text text_type_digits-default ml-4 mr-2`}>{i.count} x {i.price}</p>
                                <div className="mr-6">
                                    <CurrencyIcon type="primary" />
                                </div>
                            </div>
                        )
                    })
                }


            </div>
            <div className={`${style.thumb} mt-10 container`}>
                <p className={`textDarkGrey text text_type_main-default`}>{getDate(order?.createdAt)}</p>
                <p className={`${style.price} textGrey text text_type_digits-default mr-2`}>{getPrice()}</p>
                <CurrencyIcon type="primary" />

            </div>
        </div>
    )
}
export default FeedOrder;