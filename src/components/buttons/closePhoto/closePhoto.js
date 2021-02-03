import classes from './closePhoto.module.css'

const ClosePhoto = props => {
  const { closePhoto } = props
  return (
    <div onClick={closePhoto} className={classes.close}></div>
  )
}

export default ClosePhoto