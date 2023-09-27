/* eslint-disable */
export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    reject(new Error(`${fileName} cannot be processed`));
  });
}

uploadPhoto("guillaume.jpg")
  .then((pic) => {
    console.log(pic);
  })
  .catch((error) => {
    console.log(error);
  });
