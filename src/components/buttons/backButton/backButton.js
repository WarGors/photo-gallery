import classes from './backButton.module.css'
import { NavLink } from "react-router-dom"

const BackButton = props => {
  const {href, target} = props;
  return ( 
    <NavLink to={href} className={classes.back}>
      <div className={classes["arrow-1"]}>
          <div />
      </div>
      <span>Назад к {target}</span>
    </NavLink>
  )
}

export default BackButton