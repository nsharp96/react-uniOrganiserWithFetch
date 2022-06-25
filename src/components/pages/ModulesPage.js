 import './Module.css';
 import Button from '../components/Button';
 import Modules from '../components/Modules.js';
 import { useState, useEffect } from 'react';
 import { apiRequest } from '../API/apiRequest';
 import Modal from '../components/Modal';

 //import EditModule from '../components/EditModule';
 
 const ModulesPage = () => {
     //Properties

     const API_URL = 'https://my.api.mockaroo.com/';
     const API_KEY = '?key=bb6adbc0';

     //Context

     //Hooks
     const [loadingMessage, setLoadingMessage] = useState("Loading Data...");
     const [modules, setModules] = useState(null);


     const [modalVis, setModalVis] = useState(null);
     const [modalHeader, setModalHeader] = useState(null);
     const [modalContent, setModalContent] = useState(null);
     const [modalButtons, setModalButtons] = useState(null);

     useEffect ( () => {fetchModules() }, [] );

     //Methods

     //Fetch Modules from API
     const fetchModules = async() => {
         const outcome = await apiRequest(API_URL, 'Modules', API_KEY);
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

             {modalVis && <Modal headerText={modalHeader} contentText={modalContent} modalButtons={modalButtons}/>}
             
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