 import './Module.css';
 import Button from '../components/Button';
 import Modules from '../components/Modules.js';
 import { useState, useEffect } from 'react';
 import {API} from '../API/apiRequest';
 import Modal from '../components/Modal';
 import Tooltip from '../components/Tooltip';
 import AddForm from '../components/AddForm';


 //import EditModule from '../components/EditModule';
 
 const ModulesPage = () => {
     //Properties

     //Context

     //Hooks
     const [loadingMessage, setLoadingMessage] = useState("Loading Data...");
     const [modules, setModules] = useState(null);
     const [oneModule, setOneModule] = useState(null);

     const[addModuleFormVis, setAddModuleFormVis] = useState(false);
     const[AddformTitle, setAddformTitle] = useState("Add Module");


     const [modalVis, setModalVis] = useState(null);
     const [modalHeader, setModalHeader] = useState(null);
     const [modalContent, setModalContent] = useState(null);
     const [modalButtons, setModalButtons] = useState(null);

     useEffect ( () => {fetchModules() }, [] );

     //Methods

     //Make Module Form Visible
     const moduleFormVis = () =>
     {
         setAddModuleFormVis(true);
     }

     //Make Module Form not visible
     const cancelAddModule = () =>
     {
         setAddModuleFormVis(false);

         setOneModule(null);
     }

     //Add Module to modules
     const handleModulePost = async (module) => 
     {
        console.log("input of post"+JSON.stringify(module));
        const outcome = await API.post('Modules', module);
        outcome.success && cancelAddModule();
        console.log("outcome of post"+JSON.stringify(outcome.response));
        fetchModules();
     }

     //EDIT MODULES
     const handleModulePut = async (module) =>
     {
        console.log("input of put"+JSON.stringify(module));
        const outcome = await API.put('Modules/'+module.ModuleID , module);
        outcome.success && cancelAddModule();
        console.log("outcome of put"+JSON.stringify(outcome.response));
        fetchModules();

     }

     //Fetch Modules from API
     const fetchModules = async() => {
         const outcome = await  API.get('Modules');
         if (outcome.success) setModules(outcome.response);
         else setLoadingMessage(`Error ${outcome.response.status}: Modules could not be found`);
     }


     //Cancel Modal
     const cancelModal = () => {
         setModalVis(false);
     }

     //Delete Module Modal
     const deleteModuleModal = (module) => {
         setModalHeader('Delete Module');
         setModalContent(`Are you sure you want to delete ${module.ModuleCode} ${module.ModuleName}?`);
         setModalButtons(
             [
                 <Button 
                 key="1"
                 type ="button"
                 text = "Confirm"
                 onClick={() => (deleteModule(module)) }
                 />,
                 <Button
                 key="2"
                 type = "button"
                 text = "Cancel"
                 onClick={cancelModal}
                 />
             ]
         )
         setModalVis(true);
     }

     //Delete Module
     const deleteModule = (delmodule) => {
        setModules(modules.filter((module) => module.ModuleID !== delmodule.ModuleID))
        cancelModal();
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
     const editModule = (module) => { 
        setAddformTitle("Edit Module");
        setOneModule(module);
        setAddModuleFormVis(true);
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

             {
                addModuleFormVis && 
                
                <AddForm formTitle={AddformTitle} cancelAddModule={cancelAddModule} onPut={handleModulePut} onPost={handleModulePost} module={oneModule}/>

             }

             {modalVis && <Modal headerText={modalHeader} contentText={modalContent} modalButtons={modalButtons}/>}
             
             <div className="moduleButtons">

                 <Tooltip style="extraMargin" text="List all Modules">
                    <Button
                        className="listButton"
                        type="button"
                        text="List all"
                        icon="fa fa-list" 
                        onClick = {ListAll}
                    />
                 </Tooltip>

                 <Tooltip style="extraMargin" text="List all Favourites">
                    <Button
                        className="listButton"
                        type="button"
                        text="List favourites"
                        icon="fa fa-heart"
                        onClick = {ListFav}
                    />
                 </Tooltip>

                 <Tooltip style="extraMargin" text="Add a Module">
                    <Button
                        className="listButton"
                        type="button"
                        text="Add a Module"
                        icon="fa fa-plus"
                        onClick = {moduleFormVis}
                    />
                 </Tooltip>
                
                
             </div>

            { 
                !modules 
                    ? loadingMessage
                    : modules.length === 0
                        ? <p>Currently enrolled on no modules</p>
                        :
                            <Modules 
                                modules={modules} 
                                onDelete={deleteModuleModal} 
                                onFav={toggleFav} 
                                onEdit={editModule}
                            /> 
            }
            
            {/* <EditModule /> */}
             
         </div>
         

     );
 }

 export default ModulesPage;