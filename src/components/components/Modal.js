import Button from './Button';
import './Modal.css';

const Modal = (props) => {
    //Properties
    //Context
    //Hooks
    //Methods
    //View

    return (
        <div className="modalContainer">
            <div className="innerContainer">
                <div className="modalHeader">
                    <h1>{props.headerText}</h1>
                </div>
                <div className="modalContent">
                    <p>{props.contentText}</p>
                </div>
                <div className="modalButtons">
                    {props.modalButtons}
                </div>
            </div>
        </div>
    );
}

export default Modal;