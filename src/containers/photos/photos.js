import { connect } from "react-redux"
import BackButton from "../../components/buttons/backButton/backButton";
import Loader from "../../components/loader/loader";
import NotFound from "../../components/notFound/notFound";
import PhotoFullSize from "../../components/photoFullSize/photoFullSize";
import PhotosList from "../../components/photosList/photosList"
import { setPhotoData } from "../../redux/actions/actions";
import "./photos.css";

const Photos = props => { 
  const { users, currentPhoto, setPhotoData, usersIsLoad, photosIsLoad } = props;

  const authorID = props.match.params.authorID;
  const albumID = props.match.params.albumID;

  if (!usersIsLoad || !photosIsLoad) {
    return (
      <div className='photos-container'>
        <Loader />
      </div>
    )
  } else if (!users[authorID] || !users[authorID].albums[albumID]) {
    return (
      <NotFound />
    )
  }

  const albumPhotos = users[authorID].albums[albumID].photos;
  
  const closePhotoHandler = () => {
    setPhotoData(null)
  }

  const nextPhotoHandler = e => {
    let { index } = currentPhoto
    const direction = e.target.getAttribute('direction')

    if (direction === 'Next') {

      if (index === albumPhotos.length) index = 0;
      setPhotoData({url: albumPhotos[index].url, index: index + 1})

    } else if (direction === 'Prev') {

      if (index === 1) index = albumPhotos.length + 1;
      setPhotoData({url: albumPhotos[index - 2].url, index: index - 1})
    }
  }

  return (
    <>
      <BackButton target={'альбомам'} href={`/user-${authorID}-albums`}/>
      {currentPhoto 
        ? <PhotoFullSize 
            url={currentPhoto.url} 
            nextPhoto={nextPhotoHandler} 
            closePhoto={closePhotoHandler} 
            currentPhotoNumber={currentPhoto.index} 
            numberPhotosInAlbum={albumPhotos.length}
          /> : null}
      <PhotosList photos={albumPhotos} setPhotoData={setPhotoData}/>
    </>
    
  )
}

function mapStateToProps(state){
  return {
    users: state.users,
    currentPhoto: state.currentPhoto,
    usersIsLoad: state.usersIsLoad,
    photosIsLoad: state.photosIsLoad
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setPhotoData: data => dispatch(setPhotoData(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos)