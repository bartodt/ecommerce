// import axios from "axios";
// import {SET_USERS} from "../redux/constants"

// function setUser(usersArr) {
//   return {
//     type: SET_USERS,
//     payload: usersArr //usar "payload" si hay una sola extra key, no hacer esto >>>> return {type:"SET_USERS", users:usersArr}
//   }
// }

// export function getUsers() {
//   return function (dispatch, getState) {
//     axios.get("/api/users").then(res => dispatch(setUser(res.data)))
//       .catch(err => {throw err});
//   }
// }

// //Si no se utiliza para ninguna otra acción el action creator SET_USERS(), se puede hacer todo en una sola funcion (hacer esta refactorización solo al final del e-commerce)
// export function getUsers(usersArr) {
//   return function (dispatch, getState) {
//     axios.get("/api/users").then(res => dispatch({
//       type: SET_USERS,
//       payload: usersArr
//     }))
//       .catch(err => {throw err});
//   }
// }

