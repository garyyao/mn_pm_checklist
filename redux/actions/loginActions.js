import * as types from "./types";
import axios from "axios";

export function login(name, password) {
  /*
  return {
    type: types.SET_USERINFO,
    userInfo: { userName: "Perry" }
  };
  */
  return (dispatch, getState) => {
    return axios
      .post("http://192.168.31.206:9090/login", {
        username: name,
        password: password
      })
      .then(responce => dispatch(setUserInfo({ userInfo: responce.data })))
      .catch(error => console.log("error is " + error));
  };
}

export function setUserInfo({ userInfo }) {
  return {
    type: types.SET_USERINFO,
    userInfo
  };
}