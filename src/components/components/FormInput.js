import './FormInput.css'

export function Form(props) {
    return (
        <form>
            {props.children}
        </form>
    )
    
}


export function FormInput(props) {

    //Properties
    //Context
    //Hooks
    //Method
    //View
    return (
        <>

            <label htmlFor={props.labelFor}> {props.labelText} </label>
            <input type={props.inputType} id={props.labelFor} name={props.labelFor} onChange={props.onChange} defaultValue={props.value}/>
            {props.error && <p>*Error: {props.error}</p>}

        </>
    );
}

export function FormSelect(props) {
    return (
        <>
            <label htmlFor={props.labelFor} > {props.labelText} </label>
            <select name={props.labelFor} onChange={props.onChange} defaultValue={props.value}>
                {props.children}
            </select>
        </>

    )
}

