import { NavLink } from "react-router-dom";
import './albumsList.css'

const AlbumsList = props => {
  const { albums, authorID } = props;
  return (
    <ul className='albums-list'>{albums.map(([id, {title, photos}]) => {
      return (
        <li key={id}>
          <NavLink className='album-link' to={`/user-${authorID}-album-${id}`}>
            <div className='album-container'>
              <img className='albums-cover' src='https://i114.fastpic.ru/big/2021/0202/9d/b42ffbb81d2dfa3471fea3830785a49d.png' alt='cover' />
              <div className='albums-title'>{title}</div>
              <div className='albums-info'>{photos.length} | фото</div>
            </div>
          </NavLink>
        </li>
      )
    })}</ul>
  )
}

export default AlbumsList