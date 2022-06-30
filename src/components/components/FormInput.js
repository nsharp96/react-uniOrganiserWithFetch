import './FormInput.css'
const FormInput = (props) => {
    //Properties
    //Context
    //Hooks
    //Method
    //View
    return (
        <>
            <label for={props.labelFor} value={props.value}> {props.labelText} </label>
            <br/>
            <input type={props.inputType} id={props.labelFor} name={props.labelFor} />
            <br/>
        </>
    );
}

export default FormInput;