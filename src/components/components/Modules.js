import './Modules.css';
import Module from './Module';

const Modules = ({modules, onDelete, onFav, onEdit}) => {

  

  return (
    <div className='moduleContainer'>
      {
        modules.map((module) => (
          <Module 
            key={module.ModuleID} 
            module={module} 
            onDelete={onDelete} 
            onFav={onFav} 
            onEdit={onEdit}
          />
        ))
      }
    </div>
  )
}

export default Modules;