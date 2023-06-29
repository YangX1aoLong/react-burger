const NavigationLink = props => {
    return (
        <div className="navLink pl-5 pr-5 pb-4 pt-4">
            <props.icon className="navIcon" type={props.typeIcon}></props.icon>
            <a className="text_type_main-default pl-2" style={{color:props.typeIcon==="primary"?'#F2F2F3':'#8585AD'}}>{props.text}</a>
        </div>
    );
};
export default NavigationLink;
//background: #8585AD; #F2F2F3;
