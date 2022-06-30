import FormInput from "./FormInput";
import './AddForm.css';
import Button from './Button';
import {useState} from 'react';

const AddForm = (props) => {
    //Properties
    //Context
    //Hooks
    const [moduleName, setModuleName] = useState("");
    //Method
    //View
    return (
        <div className="addFormContainer">
            <h1>Add A Module</h1>
            <form>
                <FormInput labelFor="moduleName" labelText="Module Name" inputType="text" onChange={(e)=> setModuleName(e.target.value)}/>
                <FormInput labelFor="moduleId" labelText="Module ID" inputType="text"/>
                <FormInput labelFor="moduleCode" labelText="Module Code" inputType="text"/>
                <FormInput labelFor="moduleLevel" labelText="Module Level" inputType="text"/>
                <FormInput labelFor="moduleLeader" labelText="Module Leader ID" inputType="text"/>
                <FormInput labelFor="moduleImg" labelText="Module Image" inputType="text"/>
                <Button
                 type = "button"
                 text = "Submit"
                 onClick={props.addModule}
                 />
                 <Button
                 type = "button"
                 text = "Cancel"
                 onClick={props.cancelAddModule}
                 />

            </form>  

        </div>

    )
}

export default AddForm; 