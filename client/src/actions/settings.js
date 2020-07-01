// import axios from 'axios';
import FormData from "form-data";
import {
  setProfilePic,
  setDescription,
  toggleProfilePictureModal,
} from "../actions/app";
import { updatePostsPicture } from "../actions/posts";
import { updateProfilePicture } from "../actions/profile";

import api from "../api/api";
import { storage } from "../firebase/index";

const API = new api();

export const CHANGE_IMAGE = "CHANGE_IMAGE",
  CHANGE_DESCRIPTION = "CHANGE_DESCRIPTION";

export const changeImage = (binary, crop) => {
  console.log("binary", binary);
  return (dispatch) => {
    const payload = new FormData();
    payload.append("crop", JSON.stringify(crop));
    payload.append("newImage", binary);
    API.patch(`user/settings/profilePicture`, payload, {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": `multipart/form-data; boundary=${payload._boundary}`,
      },
    })
      .then((res) => {
        console.log("res", res);
        dispatch(toggleProfilePictureModal());
        dispatch(updatePostsPicture(res.response.path));
        dispatch(updateProfilePicture(res.response.path));
        dispatch(setProfilePic(res.response.path));
      })
      .catch((e) => console.log(e));

    // const uploadTask = storage.ref(`images/${binary.name}`).put(binary);
    // // const task = storage.ref();
    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {
    //     // progress
    //   },
    //   (error) => {
    //     // error function
    //   },
    //   () => {
    //     storage
    //       .ref("images")
    //       .child(binary.name)
    //       .getDownloadURL()
    //       .then((url) => API.patch("user/settings/profilePicture", url))
    //       .then((res) => {
    //         console.log("res", res);
    //       });
    //   }
    // );
  };
};

export const changeDescription = (description) => {
  return (dispatch) => {
    API.patch(`user/settings/description`, { description })
      .then((res) => {
        if (res.code === 200)
          dispatch(setDescription(res.response.newDescription));
      })
      .catch((e) => console.log(e));
  };
};
