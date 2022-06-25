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

            <img className='moduleImg' src={module.ModuleImage} />

            {
                module.ModuleFav === true 
                    && <div className='heart'><i className="heart fa fa-heart"></i></div> 
            }
            
            <p className='moduleName'> {module.ModuleName} ({module.ModuleCode}) </p>
            <p className='moduleLevel'>Level {module.ModuleLevel}</p>

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
                        onClick={() => onEdit(module.ModuleID)}
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