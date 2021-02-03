import { DATA_LOAD, PHOTOS_LOAD, PHOTO_DATA, USERS_LOAD } from "../actions/actionTypes"

const initialState = {
  users: {},
  currentPhoto: null,
  usersIsLoad: false,
  photosIsLoad: false
}

const Reducer = (state = initialState, action) => {
  switch(action.type) {
    case DATA_LOAD:
      return {
        ...state,
        users: action.payload
      };
    
    case PHOTO_DATA:
      return {
        ...state,
        currentPhoto: action.payload
      }
    
    case USERS_LOAD:
      return {
        ...state,
        usersIsLoad: true
      }

    case PHOTOS_LOAD:
      return {
        ...state,
        photosIsLoad: true
      }

    default: 
      return state
  }
}

export default Reducer