import {Form, FormInput, FormSelect} from "./FormInput.js";
import './AddForm.css';
import Button from './Button';
import {useState, useEffect } from 'react';
import { API } from '../API/apiRequest';

const AddForm = (props) => {
    //Properties
    //Context
    //Hooks
    const [module, setModule] = useState(null);

    //Error Messages
    const [modNameErrorMessage, setModNameErrorMessage] = useState(null);
    const [modCodeErrorMessage, setModCodeErrorMessage] = useState(null);
    

    const API_URL = 'https://my.api.mockaroo.com/';
    const API_KEY = '?key=bb6adbc0';
    const [loadingMessage, setLoadingMessage] = useState("Loading Data...");
    const [users, setUsers] = useState(null);

    useEffect ( () => {fetchUsers() }, [] );
    useEffect ( () => {setModule(props.module)}, []);
    

    //Method

    const handleChange = (event) => {
        const updatedModule = {...module, [event.target.name]:event.target.value};
        setModule(updatedModule);
        console.log(module);
        event.target.name === "ModuleName" && handleModuleNameError(updatedModule);
        event.target.name === "ModuleCode" && handleModuleCodeError(updatedModule);
        
    }

    const handleModuleNameError = (checkModule) => {
        {
            checkModule.ModuleName.length < 5 ?
                setModNameErrorMessage("Module Name must be longer than 5 characters.")
                : setModNameErrorMessage(null)
        } 
    }

    const handleModuleCodeError = (checkModule) => {
        {
            checkModule.ModuleCode.length < 5 ?
                setModCodeErrorMessage("Module Code must be longer than 5 characters.")
                : setModCodeErrorMessage(null)

        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(module.ModuleID);
        if(module.ModuleID)
        {
            {(modNameErrorMessage===null && modCodeErrorMessage===null) 
                && props.onPut(module)}
        }
        else 
        {
            {(modNameErrorMessage===null && modCodeErrorMessage===null) 
                && props.onPost(module)}
        }
    }

    //Fetch Modules from API
    const fetchUsers = async() => {
        const outcome = await API.get('Users');
        if (outcome.success) setUsers(outcome.response);
        else setLoadingMessage(`Error ${outcome.response.status}: Users could not be found`);
    }

    //Function returns module data
    const handleDefaultValue = (moduleValue) => {
            if(module===null)
            {
                return ""
            }
            else if(moduleValue==="ModuleName")
            {
                return module.ModuleName 
            }
            else if(moduleValue==="ModuleCode")
            {
                return module.ModuleCode 
            }
            else if(moduleValue==="ModuleLevel")
            {
                return module.ModuleLevel 
            }
            else if(moduleValue==="ModuleLeaderID")
            {
                return module.ModuleLeaderID 
            }
            else if(moduleValue==="ModuleImage")
            {
                return module.ModuleImage
            }
              
    }




    //View
    return (
        <div className="addFormContainer">
            <h1>{props.formTitle}</h1>
            <Form>
                <FormInput labelFor="ModuleName" labelText="Module Name" inputType="text" onChange={handleChange} error={modNameErrorMessage} value={handleDefaultValue("ModuleName")}/>  <br/>
                <FormInput labelFor="ModuleCode" labelText="Module Code" inputType="text" onChange={handleChange} error={modCodeErrorMessage} value={handleDefaultValue("ModuleCode")}/> <br/>
                <FormSelect labelFor="ModuleLevel" labelText="Module Level" inputType="text" onChange={handleChange} value={handleDefaultValue("ModuleLevel")}>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                </FormSelect > <br />
                
                    { 
                        !users 
                            ? loadingMessage
                            : users.length === 0
                                ? <p>No users to choose from</p>
                                :  <FormSelect labelFor="ModuleLeaderID" labelText="Module Leader ID" inputType="text" onChange={handleChange} value={handleDefaultValue("ModuleLeaderID")}>
                                {users.map((user) => (
                                    <option value={user.UserID} key={user.UserID}> {user.UserID} {user.UserFirstname} {user.UserLastname} </option>
                                ))}
                                 </FormSelect>
                                    
                    }

                    <br/>
                
                <FormInput labelFor="ModuleImageURL" labelText="Module Image" inputType="text" onChange={handleChange} value={handleDefaultValue("ModuleImage")}/>
                <Button
                 type = "button"
                 text = "Submit"
                 onClick={handleSubmit}
                 />
                 <Button
                 type = "button"
                 text = "Cancel"
                 onClick={props.cancelAddModule}
                 />

            </Form> 

        </div>

    )
}

export default AddForm; 