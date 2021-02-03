import classes from './nextPhoto.module.css'

const NextPhoto = props => {
  const { direction, goNext } = props
  return (
    <i direction={direction} className={classes[direction]} onClick={goNext}></i>
  )
}

export default NextPhoto