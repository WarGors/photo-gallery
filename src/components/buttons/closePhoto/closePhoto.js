import './closePhoto.css'

const ClosePhoto = props => {
  const { closePhoto } = props
  return (
    <div onClick={closePhoto} className="close"></div>
  )
}

export default ClosePhoto