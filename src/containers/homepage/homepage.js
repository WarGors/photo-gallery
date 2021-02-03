import { connect } from "react-redux"
import AuthorsList from "../../components/authorsList/authorsList";
import Loader from "../../components/loader/loader";
import './homepage.css';

const Homepage = props => {
  const { users, usersIsLoad } = props;
  const usersArr = Object.entries(users)
  console.log(usersIsLoad)
  return (
    <div className="authors-list">
      <h1>Авторы работ</h1> 
      { usersIsLoad ? <AuthorsList users={usersArr}/> : <Loader />}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    users: state.users,
    usersIsLoad: state.usersIsLoad
  }
}

export default connect(mapStateToProps)(Homepage)