import ClosePhoto from '../buttons/closePhoto/closePhoto';
import NextPhoto from '../buttons/nextPhoto/nextPhoto';
import classes from './photoFullSize.module.css'

const PhotoFullSize = props => {
  const {url, nextPhoto, closePhoto, currentPhotoNumber, numberPhotosInAlbum} = props;
  return (
    <div className={classes['img-container']}>
      <div className={classes.backdrop} onClick={closePhoto}></div>
      <ClosePhoto closePhoto={closePhoto} />
      <div className={classes['photo-container']}>
        <img src={url} alt='' />
        <div className={classes['photo-nav']}>
          <NextPhoto direction='Prev' goNext={nextPhoto} />
          <span>{currentPhotoNumber} / {numberPhotosInAlbum}</span>
          <NextPhoto direction='Next' goNext={nextPhoto} />
        </div> 
      </div>
    </div>
  )
}

export default PhotoFullSize