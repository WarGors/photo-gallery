import './nextPhoto.css'

const NextPhoto = props => {
  const { direction, goNext } = props
  return (
    <i direction={direction} className={direction} onClick={goNext}></i>
  )
}

export default NextPhoto