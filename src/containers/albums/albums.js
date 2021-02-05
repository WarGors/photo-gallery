import { connect } from "react-redux"
import AlbumsList from "../../components/albumsList/albumsList";
import BackButton from "../../components/buttons/backButton/backButton";
import Loader from "../../components/loader/loader";
import NotFound from "../../components/notFound/notFound";
import classes from './albums.module.css'

const Albums = props => {
  const { users, usersIsLoad, photosIsLoad } = props

  const authorID = props.match.params.authorID;

  if (!usersIsLoad || !photosIsLoad) {
    return (
      <div className={classes['albums-container']}>
        <Loader />
      </div>
    )
  } else if (!users[authorID]) {
    return (
      <NotFound />
    )
  }

  const authorAlbums = users[authorID].albums;
  const albumsArr = Object.entries(authorAlbums);

  return (
    <div className={classes['albums-container']}>
      <BackButton target='авторам' href='/photo-gallery' />
      <AlbumsList albums={albumsArr} authorID={authorID} />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    users: state.users,
    usersIsLoad: state.usersIsLoad,
    photosIsLoad: state.photosIsLoad
  }
}

export default connect(mapStateToProps)(Albums) 