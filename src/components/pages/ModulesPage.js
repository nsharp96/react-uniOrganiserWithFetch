 import './Module.css';
 import Button from '../components/Button';
 import CardContainer from '../layouts/CardContainer';
 import Modules from '../components/Modules.js';
 import { useState } from 'react';
 import initialModules from '../../data.js';
 //import EditModule from '../components/EditModule';
 
 const ModulesPage = () => {
     //Properties

     const [modules, setModules] = useState(initialModules);

     //Context

     //Hooks

     //Methods

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
        setModules(initialModules)
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
                modules.length > 0 
                    ? 
                        <Modules 
                            modules={modules} 
                            onDelete={deleteModule} 
                            onFav={toggleFav} 
                            onEdit={editModule}
                        /> 
                    : "You are not currently enrolled on any modules."
            }
            
            {/* <EditModule /> */}
             
         </div>
         

     );
 }

 export default ModulesPage;