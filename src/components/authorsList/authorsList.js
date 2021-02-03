import { NavLink } from "react-router-dom"
import classes from './authorsList.module.css'

const AuthorsList = props => {
  const { users } = props
  return (
    <ul className={classes['authors-ul']}>
      {users.map( ([id, user]) => <li key={id}>{<NavLink className={classes['author-name']} to={`/user-${id}-albums`}>{user.name}</NavLink>}</li>)}
    </ul>
  )
}

export default AuthorsList