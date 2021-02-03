import './photoList.css'

const PhotosList = props => {
  const {photos, setPhotoData} = props;

  return (
    <ul className='photo-list'>
      {photos.map((photo, index) => {
        return (
          <li 
            key={photo.id} 
            onClick={() => setPhotoData({url: photo.url, index: index + 1})}
          >
            <img src={photo.thumbnailUrl} alt={photo.title}/>
          </li>
        )
      })}
    </ul>
  )
}

export default PhotosList