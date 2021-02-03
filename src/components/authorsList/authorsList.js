import { NavLink } from "react-router-dom"
import './authorsList.css'

const AuthorsList = props => {
  const { users } = props
  return (
    <ul className='authors-ul'>
      {users.map( ([id, user]) => <li key={id}>{<NavLink className='author-name' to={`/user-${id}-albums`}>{user.name}</NavLink>}</li>)}
    </ul>
  )
}

export default AuthorsList