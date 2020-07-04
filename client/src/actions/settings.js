import axios from "axios";
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
  return (dispatch) => {
    // const payload = {
    //   url: null,
    // };
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
        console.log("settings response", res);
        dispatch(toggleProfilePictureModal());
        dispatch(updatePostsPicture(res.response.path));
        dispatch(updateProfilePicture(res.response.path));
        dispatch(setProfilePic(res.response.path));
      })
      .catch((e) => console.log(e));
    // const image = binary;

    // const uploadTask = storage.ref(`images/${image.name}`).put(image);
    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {
    //     // progres
    //   },
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {
    //     storage
    //       .ref("images")
    //       .child(image.name)
    //       .getDownloadURL()
    //       .then((url) => {
    //         payload.url = url;
    //         // payload.crop = JSON.stringify(crop);

    //         // console.log("payload", payload);
    //         API.patch(`user/settings/profilePicture`, payload)
    //           .then((res) => {
    //             console.log("res after patch", res);
    //             dispatch(toggleProfilePictureModal());
    //             dispatch(updatePostsPicture(res));
    //             dispatch(updateProfilePicture(res));
    //             dispatch(setProfilePic(res));
    //           })
    //           .catch((error) => console.log(error));
    //       })
    //       .catch((e) => console.log(e));
    //   }
    // );
  };
};

export const changeDescription = (description) => {
  return (dispatch) => {
    API.patch(`user/settings/description`, { description })
      .then((res) => {
        if (res.code == 200)
          dispatch(setDescription(res.response.newDescription));
      })
      .catch((e) => console.log(e));
  };
};
