import { useLocation, useNavigate } from "react-router";
import style from "./feed-order.module.css"
import { shallowEqual } from "react-redux";
import { useEffect, useState } from "react";
import { TFeedOrder } from "../../types/socket";
import { CloseIcon, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { getDate } from "../../utils/other-functions";
import { useAppSelector } from "../../utils/hooks";
import { TIngredient, TIngredientWithCount } from "../../types/ingredient";
import { nullTFeedOrder } from "../../types/feed";

type Props = {
    modal: boolean;
}
const FeedOrder = (props: Props) => {
    const location = useLocation();
    const feedList = useAppSelector(
        (store) => (store.feed), shallowEqual);
    const { ingredients } = useAppSelector(
        (store) => ({ ingredients: store.ingredients.data }), shallowEqual);
    const [order, setOrder] = useState<TFeedOrder>(nullTFeedOrder);
    const [ingredientDetail, setIngredientDetail] = useState<TIngredientWithCount[]>();
    useEffect(() => {
        const feed = feedList?.data?.orders?.find((i) => i._id === location.pathname.substring(6))
        if (feed !== undefined) {
            setOrder(feed);
            getIngredient(feed.ingredients);
        }
    }, [feedList])
    const getIngredient = (ingredientsDetails: string[]) => {
        let data: TIngredientWithCount[] = [];
        for (let i = 0; i < ingredientsDetails.length; i++) {
            const index = data.findIndex((j: TIngredient) => j?._id === ingredientsDetails[i]);
            if (index !== -1)
                data[index] = { ...data[index], count: ++data[index].count }
            else if (ingredients?.find((j: TIngredient) => j._id === ingredientsDetails[i]))
                data.push({ ...ingredients?.find((j: TIngredient) => j._id === ingredientsDetails[i])!, count: 1, id: "" });
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
    const navigate = useNavigate();
    const onClose = () => {
        navigate(-1);
    };
    return (
        <div className={props.modal ? style.windowModal : style.window}>
            <div className="container" >
                <p className="textGrey textCenter text text_type_digits-default">#{order?.number}</p>
                {props.modal && <div className={style.closeIconBox}
                    onClick={() => {
                        onClose();
                    }} >
                    <CloseIcon type="primary" />
                </div>
                }
            </div>
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