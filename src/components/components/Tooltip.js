import './Tooltip.css';

const Tooltip = (props) => {
    //Properties
    //Context
    //Hooks
    //Method
    //View
    return (
        <span className='hoverContainer'>
            <span className={props.style}>{props.text}</span>
            {props.children}
        </span>
    );
}

export default Tooltip;