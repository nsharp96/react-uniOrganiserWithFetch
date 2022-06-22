 import './Module.css';
 import Button from '../components/Button';
 import Modules from '../components/Modules.js';
 import { useState, useEffect } from 'react';
 import { apiRequest } from '../API/apiRequest';
 //import EditModule from '../components/EditModule';
 
 const ModulesPage = () => {
     //Properties

     const API_URL = 'https://my.api.mockaroo.com/';
     const API_KEY = '?key=bb6adbc0';

     //Context

     //Hooks
     const [loadingMessage, setLoadingMessage] = useState("Loading Data...");
     const [modules, setModules] = useState(null);

     useEffect ( () => {fetchModules() }, [] );

     //Methods

     //Fetch Modules from API
     const fetchModules = async() => {
         const outcome = await apiRequest(API_URL, 'Modules', API_KEY);
         if (outcome.success) setModules(outcome.response);
         else setLoadingMessage(`Error ${outcome.response.status}: Modules could not be found`);
     }

     //Delete Module
     const deleteModule = (moduleId) => {
         setModules(modules.filter((module) => module.ModuleID !== moduleId))
     }

     //Toggle Favourite
     const toggleFav = (moduleId) => {
        setModules(modules.map((module) => 
            module.ModuleID === moduleId 
                ? { ...module, ModuleFav: !module.ModuleFav} 
                : module
        ))
     }

     //Edit Module
     const editModule = (moduleId) => { 
        console.log(moduleId)
    }

     const ListAll = () => {
        fetchModules()
     }

     const ListFav = () => {
         setModules(modules.filter((module) => module.ModuleFav === true))
     }
     
     //View

     return(
         <div>
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
             
             <h1>My Modules</h1>
             
             <div className="moduleButtons">
                <Button
                    className="listButton"
                    type="button"
                    text="List all"
                    icon="fa fa-list" 
                    onClick = {ListAll}
                />
                <Button
                    className="listButton"
                    type="button"
                    text="List favourites"
                    icon="fa fa-heart"
                    onClick = {ListFav}
                />
             </div>

            { 
                !modules 
                    ? loadingMessage
                    : modules.length === 0
                        ? <p>Currently enrolled on no modules</p>
                        :
                            <Modules 
                                modules={modules} 
                                onDelete={deleteModule} 
                                onFav={toggleFav} 
                                onEdit={editModule}
                            /> 
            }
            
            {/* <EditModule /> */}
             
         </div>
         

     );
 }

 export default ModulesPage;