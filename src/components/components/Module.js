import './Module.css';
import Button from './Button.js';
import Tooltip from './Tooltip';

const Module = ( {module, onDelete, onFav, onEdit} ) => {
    //Properties
    //Context
    //Hooks
    //Methods
    const handleFavourite = () => onFav(module.ModuleID)
    

    //View
    return (
        <div className="moduleCard">

            <img className='moduleImg' src={module.ModuleImageURL} />

            {
                module.ModuleFav === true 
                    && <div className='heart'><i className="heart fa fa-heart"></i></div> 
            }
            
            <p className='moduleName'> {module.ModuleName} ({module.ModuleCode}) </p>
            <p className='moduleLevel'>Level {module.ModuleLevel}</p>
            <p className='moduleLevel'>Module Leader: {module.ModuleLeaderID}</p>
            <p className='moduleLevel'>Module ID: {module.ModuleID}</p>

            <div className='buttonContainer'>

                <Tooltip style="tooltipText" text="Set Module to Favourite">
                    <Button 
                        type="button"
                        icon="fa fa-check"
                        className="moduleButton"
                        onClick={handleFavourite}
                    />
                </Tooltip>

                <Tooltip style="tooltipText" text="Edit Module">
                    <Button 
                        type="button"
                        icon="fa fa-pencil"
                        className="moduleButton"
                        onClick={() => onEdit(module)}
                    />
                </Tooltip>
                
                <Tooltip style="tooltipText" text="Delete Module">
                    <Button 
                        type="button"
                        icon="fa fa-trash"
                        className="moduleButton"
                        onClick={() => onDelete(module)}
                    /> 
                </Tooltip>
                
            </div>
            
        </div>

    )
}

export default Module;