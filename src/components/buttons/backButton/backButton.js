import './backButton.css'
import { NavLink } from "react-router-dom"

const BackButton = props => {
  const {href, target} = props;
  return ( 
    <NavLink to={href} className='back'>
      <div className="arrow-1">
          <div />
      </div>
      <span>Назад к {target}</span>
    </NavLink>
  )
}

export default BackButton