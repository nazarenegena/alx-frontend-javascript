/* eslint-disable */

import uploadPhoto from "./utils";
import createUser from "./utils";

export default function handleProfileSignup() {
  createUser()
    .then((response) => {
      console.log("Success" + response);
    })
    .catch((err) => {
      console.log("Signup system offline" + err);
    });
  uploadPhoto()
    .then((response) => {
      console.log("Success" + response);
    })
    .catch((err) => {
      console.log("Signup system offline" + err);
    });
}

handleProfileSignup();
