import { ReactNode } from "react";

/* eslint-disable jsx-a11y/anchor-is-valid */
type Props = {
    text: string;
    type: string;
    children: ReactNode;
}
const NavigationLink = (props: Props) => {
    return (
        <div className="navLink pl-5 pr-5 pb-4 pt-4">
            {props.children}
            <a className="text_type_main-default pl-2" style={{ color: props.type === "primary" ? '#F2F2F3' : '#8585AD' }}>{props.text}</a>
        </div>
    );
};
export default NavigationLink;

// <a className="text_type_main-default pl-2" style={{ color: props.typeIcon === "primary" ? '#F2F2F3' : '#8585AD' }}>{props.text}</a>