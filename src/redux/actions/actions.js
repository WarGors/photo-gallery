import { DATA_LOAD, PHOTOS_LOAD, PHOTO_DATA, USERS_LOAD } from "./actionTypes";

export function usersLoad() {
  return async dispatch => {
    try {
      
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      let json = null;

      if (response.ok) {
        json = await response.json();
      }

      const users = {};

      json.forEach(user => users[user.id] = {
        name: user.name,
        albums: {}
      })
      
      dispatch(setUsers(users))
      dispatch(loadUsers())
      dispatch(albumsPhotosLoad(users))

    } catch(e) {
      console.error(e)
    }
     
  }
}

export function albumsPhotosLoad(users) {
  return async dispatch => {
    try {

      const responsePhotos = await fetch('https://jsonplaceholder.typicode.com/photos');

      let jsonPhohtos = null;

      if (responsePhotos.ok) {
        jsonPhohtos = await responsePhotos.json();
      }

      const responseAlbums = await fetch('https://jsonplaceholder.typicode.com/albums')

      let jsonAlbums = null;

      if (responseAlbums.ok) {
        jsonAlbums = await responseAlbums.json()
      }

      const usersFullInfo = {...users};
      const photosInAlbums = {};

      jsonPhohtos.forEach(photo => {
        if (!photosInAlbums[photo.albumId]) {
          photosInAlbums[photo.albumId] = []
        }
        photosInAlbums[photo.albumId].push(photo)
      })

      jsonAlbums.forEach(album => users[album.userId].albums[album.id] = {
        title: album.title,
        photos: photosInAlbums[album.id]
      })

      dispatch(setUsers(usersFullInfo))
      dispatch(loadPhotos())

    } catch(e) {
      console.error(e)
    }
  }
}

export function setUsers(users) {
  return {
    type: DATA_LOAD,
    payload: users
  }
}

export function setPhotoData(data) {
  return {
    type: PHOTO_DATA,
    payload: data
  }  
}

export function loadUsers() {
  return {
    type: USERS_LOAD
  }
}

export function loadPhotos() {
  return {
    type: PHOTOS_LOAD
  }
}