import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import NavigationLink from "../navigation-link";
const AppHeader = props => {
    return (
        <div className="navPanel">
            <div className="contentBox m-4">
                <div className="navBox">
                    <NavigationLink icon={BurgerIcon} typeIcon="primary" text="Конструктор"></NavigationLink>
                    <NavigationLink icon={ListIcon} typeIcon="secondary" text="Лента заказов"></NavigationLink>
                </div>
                <div className="logoBurger">
                    <Logo></Logo>
                </div>
                <div className="navBox loginBox">
                    <NavigationLink className="ml-10" icon={ProfileIcon} typeIcon="secondary" text="Личный кабинет"></NavigationLink>
                </div>
            </div>
        </div>
    );
};
export default AppHeader;