import { useNavigate } from "react-router";
import style from "./orders.module.css";
import { shallowEqual, useSelector } from "react-redux";
import { TFeedOrder, TIngredient } from "../../types";
import { getDate } from "../../utils/other-functions";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
const Orders = () => {
    const navigate = useNavigate();
    const { feed } = useSelector(
        (store: any) => ({ feed: store.feed.data }),
        shallowEqual
    );
    const { ingredients } = useSelector(
        (store: any) => ({ ingredients: store.ingredients.data }),
        shallowEqual
    );
    const getIngredient = (id: string) => {
        return ingredients.find((i: TIngredient) => i._id === id);
    }
    const getPriceIngredients = (orderIngredients: string[]) => {
        let price: number = 0;
        orderIngredients.map((i: string) => {
            const ingredinet: TIngredient = getIngredient(i);
            if (ingredinet) price += ingredinet.price;
            return null;
        })
        return price;
    }

    const onOrder = (id: string) => {
        navigate(`/feed/${id}`)
    }
    return (
        <div className={`${style.feed}`}>
            <div className={`${style.feedList} mt-4`}>
                {
                    feed.orders && feed.orders.map((i: TFeedOrder, index: number) => {      
                        let margin = "mt-4";
                        if (index === 0) margin = "";
                        return (
                            <div className={`${style.orderBox} ${margin}`} key={index} onClick={() => { onOrder(i?._id) }}>
                                <div className="container">
                                    <p className="textGrey text text_type_digits-default">#{i.number}</p>
                                    <p className={`${style.date} textDarkGrey text text_type_main-default`}>{getDate(i.createdAt)}</p>
                                </div>
                                <p className="textGrey text text_type_main-medium mt-6">{i.name}</p>
                                <div className="container mt-6">
                                    <div className={`${style.ingredients} container`}>
                                        {i.ingredients.map((i: string, index: number) => {
                                            const zIndex = 10 - index;
                                            if (index < 5)
                                                return (
                                                    <div key={index} className={style.imageBox} style={{ zIndex: zIndex }}>
                                                        <img className={style.image} alt={i} height={64} width={100} src={getIngredient(i)?.image}></img>
                                                    </div>
                                                )
                                            else if (index === 5)
                                                return (
                                                    <div key={index} className={style.imageBox} style={{ zIndex: zIndex }}>
                                                        <img className={style.imageLast} alt={i} height={64} width={100} src={getIngredient(i)?.image}></img>
                                                        <div className={style.imageBoxLast}>
                                                            <p className="textGrey text text_type_digits-default pt-5 pl-3">+{3}</p>
                                                        </div>
                                                    </div>)
                                            else return null

                                        })

                                        }
                                    </div>
                                    <div className="container ml-6 pt-4 ">
                                        <p className={`${style.price} textGrey text text_type_digits-default mr-2`}>{getPriceIngredients(i.ingredients)}</p>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                </div>
                            </div>)
                    })
                }
            </div>

        </div>
    )
}
export default Orders;