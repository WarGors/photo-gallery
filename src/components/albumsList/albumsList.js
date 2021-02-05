import { NavLink } from "react-router-dom";
import classes from './albumsList.module.css'

const AlbumsList = props => {
  const { albums, authorID } = props;
  return (
    <ul className={classes['albums-list']}>{albums.map(([id, {title, photos}]) => {
      return (
        <li key={id}>
          <NavLink className={classes['album-link']} to={`/photo-gallery/user-${authorID}-album-${id}`}>
            <div className={classes['album-container']}>
              <img className={classes['albums-cover']} src='https://i114.fastpic.ru/big/2021/0202/9d/b42ffbb81d2dfa3471fea3830785a49d.png' alt='cover' />
              <div className={classes['albums-title']}>{title}</div>
              <div className={classes['albums-info']}>{photos.length} | фото</div>
            </div>
          </NavLink>
        </li>
      )
    })}</ul>
  )
}

export default AlbumsList