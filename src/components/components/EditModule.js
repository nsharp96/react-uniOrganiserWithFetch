import './EditModule.css';
import { useState } from 'react';

const EditModule = () => {
    //Properties
    //Context
    //Hooks
    const [modName, setModName] = useState('');
    const [modCode, setModCode] = useState('');
    const [modLevel, setModLevel] = useState('');
    const [modFav, setModFav] = useState(false);
    //Method
    //View

    return (
        <form className="changeModule">
            <div className="formInput">
                <label>Module Name</label>
                <input 
                    type='text' 
                    value={modName} 
                    onChange= {(e) => setModName(e.target.value)}
                />
            </div>
            <div className="formInput">
                <label>Module Code</label>
                <input 
                    type='text'
                    value={modCode}
                    onChange = {(e) => setModCode(e.target.value)}

                 />
            </div>
            <div className="formInput">
                <label>Module Level</label>
                <input 
                    type='text'
                    value={modLevel}
                    onChange = {(e) => setModLevel(e.target.value)}
                />
            </div>
            <div className='formInput'>
                <label>Set to Favourite</label>
                <input 
                    type='checkbox'
                    value={modFav}
                    onChange = {(e) => setModFav(e.currentTarget.checked)}
                 />
            </div>

            <input className='submitBut' type='submit' value='Save Task' />
        </form>
    );
}

export default EditModule;