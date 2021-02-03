import classes from './loader.module.css'

const Loader = () => (
<div className={classes.center}>
  <div className={classes['lds-spinner']}>
    <div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div />
  </div>
</div>
)

export default Loader