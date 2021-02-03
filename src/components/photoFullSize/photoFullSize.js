import ClosePhoto from '../buttons/closePhoto/closePhoto';
import NextPhoto from '../buttons/nextPhoto/nextPhoto';
import './photoFullSize.css'

const PhotoFullSize = props => {
  const {url, nextPhoto, closePhoto, currentPhotoNumber, numberPhotosInAlbum} = props;
  return (
    <div className='img-container'>
      <div className='backdrop' onClick={closePhoto}></div>
      <ClosePhoto closePhoto={closePhoto} />
      <div className='photo-container'>
        <img src={url} alt='' />
        <div className='photo-nav'>
          <NextPhoto direction='Prev' goNext={nextPhoto} />
          <span>{currentPhotoNumber} / {numberPhotosInAlbum}</span>
          <NextPhoto className="arrow right" direction='Next' goNext={nextPhoto} />
        </div>
        
        
        
      </div>
    </div>
  )
}

export default PhotoFullSize